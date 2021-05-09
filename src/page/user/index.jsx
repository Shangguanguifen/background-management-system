import { useEffect, useState } from 'react'
import { Table } from 'antd';
import User from 'service/userService'
import CommonUtil from 'util/common'

let _user = new User();
let _commonUtil = new CommonUtil();


const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '电话',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '注册时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
];

function UserList() {
  const [pageNum, setPageNum] = useState(1)
  const [dataList, setDataList] = useState([])
  const [dataNum, setDataNum] = useState(1)

  const handleGetUserList = (pageNum) => {
    _user.getUserList(pageNum).then(res => {
      let resList = res.list
      resList.forEach(item => {
        item.key = item.id
        item.createTime = new Date(item.createTime).toLocaleString()
      })
      
      setDataNum(res.navigatePages * 10)
      setDataList(res.list)
    }).catch(err => {
      _commonUtil.errorTips(err)
    })
  }
  const handleChangePageNum = (e) => {
    setPageNum(e.current)
  }

  useEffect(() => {
    handleGetUserList(pageNum)
  }, [pageNum])

  return <Table columns={columns} dataSource={dataList} onChange={handleChangePageNum} pagination={{
    total: dataNum
  }}></Table>
}

export default UserList;