import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './index.scss'
import Statistic from 'service/statisticService'
import {
  UnorderedListOutlined,
  FormOutlined,
  UserOutlined,
} from '@ant-design/icons';

import CommonUtil from 'util/common'

let _commonUtil = new CommonUtil();
const _statistic = new Statistic();

function Home() {
  let [itemsArr, setItemsArr] = useState([])

  // 获取数据并更新数据
  const loadCount = (items) => {
    _statistic.getHomeCount().then(res => {
      items.forEach(item => {
        let index = item.countName;
        if(res[index]) {
          item.count = res[index];
        }
      })
      // 更新数据
      setItemsArr(items);
    }).catch(err => {
      _commonUtil.errorTips(err);
    })
  }  

  useEffect(() => {
    let items = [{
      name: '商品总数',
      count: '-',
      countName: 'productCount',
      color: '#f0dD4e',
      icon: <UnorderedListOutlined />
    }, {
      name: '订单总数',
      count: '-',
      countName: 'orderCount',
      color: '#5cb85c',
      icon : <FormOutlined />
    }, {
      name: '用户总数',
      count: '-',
      countName: 'userCount',
      color: '#4cb1cf',
      icon: <UserOutlined />
    }];
  
    loadCount(items);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div id="page-wrapper">
      <div className="row">
          {
            itemsArr ? itemsArr.map(item => {
              return <div className="row-item" style={{background: `${item.color}`}} key={item.countName}>
                <Link to="/user" className="row-item-box">
                  <p className="count">{item.count}</p>
                  <p className="desc">
                    {item.icon}
                    <span>{item.name}</span>
                  </p>
                </Link>
              </div>     
            }) : <div> loading~~~ </div>
          }
      </div>
    </div>
  );
}

export default Home;
