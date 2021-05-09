/*
 * @Author: Guifen Shangguan 
 * @Date: 2021-04-12 16:42:05 
 * @Last Modified by: Guifen Shangguan
 * @Last Modified time: 2021-05-03 21:28:08
 */
import React from 'react';
import {
  UnorderedListOutlined,
  MinusCircleOutlined,
  DesktopOutlined,
  FormOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Redirect } from 'react-router';

const router = [
  {
    path: '/',
    title: '首页',
    exact: true,
    menu: true,
    icon: <DesktopOutlined />,
    component: React.lazy(() => import('page/home')),
  }, 
  {
    path: '/product',
    title: '商品',
    icon: <UnorderedListOutlined />,
    children: [
      {
        path: '/product/productList',
        title: '商品管理',
        exact: true,
        menu: true,
        component: React.lazy(() => import('page/product/productList')),
      }, {
        path: '/product/save/:id?',
        title: '新增商品',
        exact: true,
        component: React.lazy(() => import('page/product/productList/save')),
      }, {
        path: '/product/detail/:pid',
        title: '商品详情',
        exact: true,
        component: React.lazy(() => import('page/product/productList/detail')),
      }, {
        path: '/product/categoryList/:id?',
        title: '品类管理',
        exact: true,
        menu: true,
        component: React.lazy(() => import('page/product/category')),
      }, {
        path: '/category/add',
        exact: true,
        title: '新增品类',
        component: React.lazy(() => import('page/product/category/add'))
      }
    ]
  },
  {
    path: '/order',
    title: '订单',
    icon: <FormOutlined />,
    children: [
      {
        path: '/order/orderList',
        title: '订单管理',
        menu: true,
        exact: true,
        component: React.lazy(() => import('page/order')),
      }, {
        path: '/order/detail/:id',
        title: '订单详情',
        exact: true,
        component: React.lazy(() => import('page/order/detail')),
      }
    ]
  },
  {
    path: '/user',
    title: '用户',
    icon: <UserOutlined />,
    children: [
      {
        path: '/user/userList',
        title: '用户管理',
        menu: true,
        exact: true,
        component: React.lazy(() => import('page/user')),
      }
    ]
  }, {
    path: '/test',
    title: '权限测试',
    icon: <MinusCircleOutlined />,
    children: [
      {
        path: '/test/authority',
        title: '权限组件',
        menu: true,
        exact: true,
        component: React.lazy(() => import('page/authority')),
      },
      {
        path: '/test/permission',
        title: '页面权限(admin)',
        menu: true,
        children: [{
          path: '/test/permission/third',
          title: '三级路由',
          authority: true,
          menu: true,
          exact: true,
          component: React.lazy(() => import('page/authority')),
        }]
      }
    ]
  }, {
    path: '/404',
    exact: true,
    title: '404',
    component: React.lazy(() => import('page/error/unExistError')),
  }, {
    path: '/*',
    title: "redirect",
    component: () => <Redirect to="/404" />,
    redirect: '/404',
  }, 
]

export default router