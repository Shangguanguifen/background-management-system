/*
 * @Author: Guifen Shangguan 
 * @Date: 2021-04-08 14:54:54 
 * @Last Modified by: Guifen Shangguan
 * @Last Modified time: 2021-04-08 20:04:50
 */
import { useEffect, useState } from 'react';
import { List } from 'antd';

import './detail.scss';
import Product from 'service/productService';
import CommonUtil from 'util/common';


let _commonUtil = new CommonUtil();
const _product      = new Product();

const initData = [{
  name: '商品名称',
  target: 'name',
  content: ''
}, {
  name: '商品描述',
  target: 'subtitle',
  content: ''
}, {
  name: '所属分类',
  target: 'category',
  content: ''
}, {
  name: '商品价格',
  target: 'price',
  content: ''
}, {
  name: '商品库存',
  target: 'stock',
  content: ''
}, {
  name: '商品图片',
  target: 'subImages',
  content: ''
}, {
  name: '商品详情',
  target: 'detail',
  content: ''
}];



function ProductDetail (props) {
  const [detailData, setDetailData] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [parentCategoryName,setParentCategoryName] = useState('')
  
  const imagePart = (url) => {
    return url ? <img src={url} alt='Describe' style={{display: 'inline-block', width: 80}}/> : <span>暂无图片</span>
  }

  const detaiPart = (detail) => {
    return <div style={{display: 'inline-block'}} dangerouslySetInnerHTML={{__html: detail}}></div>
  }

  const categoryPart = (categoryId, parentCategoryId) => {
    _product.getCategoryList().then(res => {
      for(let i = 0 ; i < res.length; i++) {
        if(res[i].id === categoryId) {
          setCategoryName(res[i].name);
          break;
        }
      }
    }).catch(err => {
      _commonUtil.errorTips(err)
    })

    if(parentCategoryId === 0) {
      // 只有一级品类
      return categoryName ? <span> {categoryName} </span> : <span>暂无所属分类</span>
    } else {
      // 有二级品类
      _product.getCategoryList(parentCategoryId).then(res => {
        for(let i = 0 ; i < res.length; i++) {
          if(res[i].id === parentCategoryId) {
            setParentCategoryName(res[i].name);
            break;
          }
        }
      })
      return categoryName || parentCategoryName ? <span>{categoryName} / {parentCategoryName}</span> : <span>暂无所属分类</span>
    } 
    
  }
 
  // 加载商品详情
  const loadProductDetail = (id) => {
    _product.getProduct(id).then(res => {
      initData.forEach(item => {
        switch(item.target) {
          case 'subImages':
            return item.content = imagePart(res.imageHost + res.subImages);
          case 'detail':
            return item.content = detaiPart(res.detail);
          case 'category':
            return item.content = categoryPart(res.categoryId, res.parentCategoryId);
          default:
            item.content = res[item.target];
            break;
        }
      })
      setDetailData(initData);
    }).catch(err => {
      _commonUtil.errorTips(err);
    })
  }

  useEffect(() => {
    loadProductDetail(props.match.params.pid);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.pid])

  return <div>
      <List
      className="list"
      itemLayout="horizontal"
      dataSource={detailData}
      renderItem={item => (
        <List.Item>
          <span className="list-title">{item.name} :</span>
          {item.content}
        </List.Item>
      )}
    />
  </div>
}

export default ProductDetail;