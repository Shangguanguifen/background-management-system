/*
 * @Author: Guifen Shangguan 
 * @Date: 2021-04-03 15:45:33 
 * @Last Modified by: Guifen Shangguan
 * @Last Modified time: 2021-04-08 13:49:45
 */
import { useEffect, useState } from 'react';
import  { Link } from 'react-router-dom';
import { Table, Tag, Space, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import './index.scss';

import ListSearch from 'page/product/productList/listSearch'
import Product from 'service/productService';
import CommonUtil from 'util/common';

let _commonUtil = new CommonUtil();
const _product = new Product();


function ProductList() {
  const [pageNum, setPageNum] = useState(1);
  const [dataList, setDataList] = useState([])
  const [dataNum, setDataNum] = useState(1)
  const [listType, setListType] = useState('list');
  const [searchType, setSearchType] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('')

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '商品名字',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '信息',
      dataIndex: 'subtitle',
      key: 'subtitle',
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '状态',
      key: 'status',
      dataIndex: 'status',
      render: (status, state) => {
        let color = status === 1 ? 'green' : 'volcano';
        return <div>
          <p style={{display: 'inline', marginRight: '10px'}}>{status === 1 ? '正在售' : '已下架'}</p>
          <Tag color={color} onClick={(e) => handleSetProductStatus(e, state, status)}>
            {status === 1 ? '下架' : '上架'}
          </Tag>
        </div>
      }
    },
    {
      title: '操作',
      key: 'action',
      render: product => (
        <Space size="middle">
          <Link to={ `/product/detail/${product.id}`}>查看</Link>
          <Link to={ `/product/save/${product.id}`} >编辑</Link>
        </Space>
      ),
    },
  ];

  // 更改商品状态
  const handleSetProductStatus = (e, state, currentStatus) => {
    console.log(state, currentStatus)
    let newState = currentStatus === 1 ? 2 : 1;
    let confirmTips = currentStatus === 1 ? '确定要下架该商品？' : '确定要上架该商品？';
    
    if(window.confirm(confirmTips)) {
      _product.setProductStatus({
        productId: state.id,
        status: newState
      }).then(res => {
        _commonUtil.successTips(res)
        handleGetProductList(listType, pageNum, searchType, searchKeyword)
      }).catch(err => {
        console.log(err, 'err')
        _commonUtil.errorTips(err)
      })
    }
  }

  // 获取商品列表
  const handleGetProductList = (listType, pageNum, searchType, searchKeyword) => {
    let listParam = {};
    listParam.listType = listType;
    listParam.pageNum = pageNum;
    if(listType === 'search') {
      listParam.searchType = searchType;
      listParam.searchKeyword = searchKeyword;
    }
    // 请求接口
    _product.getProductList(listParam).then(res => {
      let resList = res.list
      resList.forEach(item => {
        item.key = item.id
      })

      setDataNum(res.lastPage * 10)
      setDataList(res.list)
    }).catch(err => {
      _commonUtil.errorTips('错误操作，请输入有效字段')
    })
  }
  const handleChangePageNum = (e) => {
    setPageNum(e.current)
  }

  // 搜索
  const onSearch = (searchType, searchKeyword) => {
    setListType(searchKeyword ? 'search' : 'list');
    setSearchType(searchType);
    setSearchKeyword(searchKeyword);
    setPageNum(1);
  }

  useEffect(() => {
    handleGetProductList(listType, pageNum, searchType, searchKeyword)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listType, pageNum, searchType, searchKeyword])
  
  return (
    <div>
      <ListSearch onSearch={onSearch}>
        <Link to="/product/save">
          <Button type="primary" size={'large'} className="table-button" icon={<PlusOutlined style={{fontWeight: 700}}/>}>
            添加商品
          </Button>
        </Link>
      </ListSearch>
      <Table columns={columns} dataSource={dataList} onChange={handleChangePageNum} pagination={{
      total: dataNum
    }} /></div>
  )

  
}

export default ProductList;

