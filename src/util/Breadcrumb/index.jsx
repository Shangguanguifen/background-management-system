/*
 * @Author: Guifen Shangguan 
 * @Date: 2021-04-12 16:11:56 
 * @Last Modified by: Guifen Shangguan
 * @Last Modified time: 2021-05-09 15:37:33
 */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { matchRoutes} from "react-router-config";
import {
  HomeOutlined
} from '@ant-design/icons';



function BreadcrumbItem({urlDetail, routes}) {
  const [breadcrumbItem, setBreadcrumbItem] = useState([]);

  const getMatchRoute = (routes, pathname) => {
    let result = [];
    const recursion = (routes, pathname) => {
      const branch = matchRoutes(routes, pathname);

      if(!branch[0].route.title) {
        return;
      }
      result.push(branch[0].route.title);
      if(branch[0].route && branch[0].route.children) {
        return recursion(branch[0].route.children, pathname)
      }
      return result;
    }
    return recursion(routes, pathname);
  }

  useEffect(() => {
    let matchTitleArr = getMatchRoute(routes, urlDetail.pathname);
    setBreadcrumbItem(matchTitleArr);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlDetail])
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>
        <Link to='/'> <HomeOutlined /> </Link>
      </Breadcrumb.Item>
      {
        breadcrumbItem.map((item, index) => {
          return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
        })
      }
    </Breadcrumb>
  );
}

export default BreadcrumbItem;
