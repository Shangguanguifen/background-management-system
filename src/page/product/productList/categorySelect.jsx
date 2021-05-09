/*
 * @Author: Guifen Shangguan 
 * @Date: 2021-04-08 20:04:47 
 * @Last Modified by: Guifen Shangguan
 * @Last Modified time: 2021-04-08 20:06:18
 */
import { useState, useCallback, useEffect } from 'react'
import { Select } from 'antd';

import Product from 'service/productService';
import CommonUtil from 'util/common';

let _commonUtil = new CommonUtil();
const _product = new Product();

const { Option } = Select;

const CategorySelect = (props) => {
  const [firstCategoryList, setFirstCategoryList] = useState([]);
  const [firstCategoryId, setFirstCategoryId] = useState(0);
  const [secondCategoryList, setSecondCategoryList] = useState([]);
  const [secondCategoryId, setSecondCategoryId] = useState(0);
  

  // 加载编辑页面初始数据
  const loadInitValue = (categoryIdArr) => {    
    setFirstCategoryId(categoryIdArr[0]);
    loadFirstCategory();

    if(categoryIdArr[1] !== 0) {
      // 有两级品类
      setSecondCategoryId(categoryIdArr[1]);
      handleFirstCategoryChange(categoryIdArr[0])
    }
    
  }


  // 获取一级品类
  const loadFirstCategory = () => {
    return  _product.getCategoryList().then(res =>{
      res.forEach(item => {
        res.label = item.name;
        res.value = item.id;
      })
      setFirstCategoryList(res);
    }).catch(err => {
      _commonUtil.errorTips(err);
    })
  }

  const handleGetCategoryList = () => {
    loadFirstCategory();
  };

  // 获取二级品类
  const handleFirstCategoryChange = value => {
    console.log(value, 'value')
    
    setFirstCategoryId(value);

    _product.getCategoryList(value).then(res => {
      res.forEach(item => {
        res.label = item.name;
        res.value = item.id;
      })
      setSecondCategoryList(res);
    }).catch(err => {
      _commonUtil.errorTips(err);
    })
  };

  const handleSecondCategoryChange = value => {
    setSecondCategoryId(value);
  };

  // 将品类Id传给父组件
  const onPropsCategoryChange = useCallback(() => {
    let categoryChangable = typeof props.onCategoryChange === 'function';
    if(secondCategoryId) {
      categoryChangable && props.onCategoryChange(secondCategoryId, firstCategoryId);
    } else {
      // 没有选择二级品类
      categoryChangable && props.onCategoryChange(firstCategoryId, 0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstCategoryId, secondCategoryId])

  useEffect(() => {
    onPropsCategoryChange();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onPropsCategoryChange])

  useEffect(() => {
    if(props.categoryId[0]) {
      loadInitValue(props.categoryId)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.categoryId])
  console.log(typeof firstCategoryId, 'typeof firstCategoryId')
  return (
    <>
      <Select
        style={{ width: 186, marginRight: 14 }}
        onChange={handleFirstCategoryChange}
        value={firstCategoryId}
        onDropdownVisibleChange={handleGetCategoryList}
        placeholder="请选择一级品类">
          {firstCategoryList.map(category => {
            return (
                <Option value={category.id} key={category.id}>{category.name}</Option>
              )
          })}
      </Select>
      {secondCategoryList.length > 0 ? 
        <Select
          style={{ width: 186 }}
          value={secondCategoryId}
          onChange={handleSecondCategoryChange}
          placeholder="请选择二级品类">
            {secondCategoryList.map(category => (
              <Option value={category.name} key={category.id}>{category.name}</Option>
            ))}
      </Select> : null}
    </>
  );
};

export default CategorySelect;

