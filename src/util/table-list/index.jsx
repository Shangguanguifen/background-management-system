import { useEffect, useState } from 'react'
import { Table} from 'antd';
import { getProductList } from 'service/tableDataService'



function TableList({columns, url}) {
  const [pageNum, setPageNum] = useState(1);
  const [dataList, setDataList] = useState([])
  const [dataNum, setDataNum] = useState(1)

  const handleGetProductList = (pageNum) => {
    getProductList(pageNum, url).then(res => {
      let resList = res.list
      resList.forEach(item => {
        item.key = item.id
        if(item.createTime) {
          item.createTime = new Date(item.createTime).toLocaleString()
        } 
      })

      setDataNum(res.navigatePages * 10)
      setDataList(res.list)
    }).catch(err => {

    })
  }
  const handleChangePageNum = (e) => {
    setPageNum(e.current)
  }

  useEffect(() => {
    handleGetProductList(pageNum)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum])
  return <Table columns={columns} dataSource={dataList} onChange={handleChangePageNum} pagination={{
    total: dataNum
  }} />
}

export default TableList;

