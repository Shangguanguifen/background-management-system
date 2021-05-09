/*
 * @Author: Guifen Shangguan 
 * @Date: 2021-04-08 13:50:07 
 * @Last Modified by:   Guifen Shangguan 
 * @Last Modified time: 2021-04-08 13:50:07 
 */
import { useEffect, useState } from 'react';
import { Input, Select } from 'antd';

const { Option } = Select;


function ListSearch(props) {
  const [searchType, setSearchType] = useState('productId');
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSelectValue = (e) => {
    setSearchType(e);
  }
  const handleInputCallback = (e) => {
    setSearchKeyword(e);
  }
  useEffect(() => {
    props.onSearch(searchType, searchKeyword);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchType, searchKeyword])

  return (
    <div>
      <Input.Group compact className="table-search">
        <Select defaultValue="productId" onChange={handleSelectValue}>
          <Option value="productId">按商品id查询</Option>
          <Option value="productName">按商品名称查询</Option>
        </Select>
        <Input.Search style={{ width: '50%' }} placeholder="请输入关键词" name="searchKeyword" onSearch={handleInputCallback}/>
      </Input.Group>
      {
        props.children
      }
    </div>
  );
}

export default ListSearch;
