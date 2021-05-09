/*
 * @Author: Guifen Shangguan 
 * @Date: 2021-04-08 13:49:38 
 * @Last Modified by: Guifen Shangguan
 * @Last Modified time: 2021-04-08 16:11:52
 */
import { useEffect, useState } from 'react';
import  { Link } from 'react-router-dom';
import { Table, Space, Input } from 'antd';

import Order from 'service/orderService';
import CommonUtil from 'util/common';

let _commonUtil = new CommonUtil();
const _order = new Order();


function OrderList() {
  const [pageNum, setPageNum] = useState(1);
  const [dataList, setDataList] = useState([])
  const [dataNum, setDataNum] = useState(1)
  const [listType, setListType] = useState('list');
  const [searchNum, setSearchNum] = useState(0)

  const columns = [
    {
      title: '订单号',
      dataIndex: 'orderNo',
      key: 'orderNo',
    },
    {
      title: '收件人',
      dataIndex: 'receiverName',
      key: 'receiverName',
    },
    {
      title: '订单状态',
      dataIndex: 'statusDesc',
      key: 'statusDesc',
    },
    {
      title: '订单总价 / 元',
      dataIndex: 'payment',
      key: 'payment',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '操作',
      key: 'action',
      render: order => (
        <Space size="middle">
          <Link to={ `/order/detail/${order.orderNo}`}>查看</Link>
        </Space>
      ),
    },
  ];


  // 获取订单列表
  const handleGetProductList = (listType, pageNum, searchType, searchKeyword) => {
    let listParam = {};
    listParam.listType = listType;
    listParam.pageNum = pageNum;
    if(listType === 'search') {
      listParam.orderNo = searchNum;
    }
    // 请求接口
    _order.getOrderList(listParam).then(res => {
      console.log(res, 'list')
      let resList = res.list
      resList.forEach(item => {
        item.key = item.orderNo
      })
      setDataNum(res.lastPage * 10)
      setDataList(res.list)
    }).catch(err => {
      _commonUtil.errorTips(err)
    })
  }
  const handleChangePageNum = (e) => {
    setPageNum(e.current)
  }

  // 搜索
  const handleInputCallback = (value) => {
    setListType(value? 'search' : 'list');
    setSearchNum(value);
  }

  useEffect(() => {
    handleGetProductList(listType, pageNum, searchNum)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listType, pageNum, searchNum])
  
  return (
    <div>
      <Input.Search
        style={{ width: '50%' }}
        placeholder="请输入订单号"
        name="searchKeyword"
        onSearch={handleInputCallback}/>
      <Table columns={columns} dataSource={dataList} onChange={handleChangePageNum} pagination={{
      total: dataNum
    }} /></div>
  )

  
}

export default OrderList;

