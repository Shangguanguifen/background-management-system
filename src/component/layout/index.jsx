import { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  CaretDownOutlined,
  LoginOutlined
} from '@ant-design/icons';
import BreadcrumbItem from 'util/Breadcrumb'

import './index.scss';
import routes from 'router/index'
import UserService from 'service/userService';
import CommonUtil from 'util/common';


let _userService = new UserService();
let _commonUtil = new CommonUtil();


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function showMenu(routes) {
  return routes.map(item => {
    return item.children
      ? <SubMenu key={item.path} title={item.title} icon={item.icon}>{showMenuItem(item.children)}</SubMenu>
      : showMenuItem(item)
  })
}

function showMenuItem(routes) {
  if(routes instanceof Array) {
    // children
    return routes.map(item => {
      if(item.children) {
        // 三级以上路由存在
        return showMenu([item])
      }
      const result = item.menu
      ? (<Menu.Item key={item.path}>
          <NavLink to={item.path}>{item.title}</NavLink>
        </Menu.Item>) : null
      if(item.path === '/product/categoryList/:id?') {
        return item.menu
        ? (<Menu.Item key={item.path}>
            <NavLink to='/product/categoryList'>{item.title}</NavLink>
          </Menu.Item>) : null
      }
      return item.menu
        ? (<Menu.Item key={item.path}>
            <NavLink to={item.path}>{item.title}</NavLink>
          </Menu.Item>) : null
    })
  } else {
    return routes.menu
      ? (<Menu.Item key={routes.path} icon={routes.icon}>
          <NavLink to={routes.path}>{routes.title}</NavLink>
        </Menu.Item>) : null
  }
}

function SiderDemo(props) {
  const [collapsed, setCollapsed] = useState(false);
  let username = _commonUtil.getStorage('userInfo').username;

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  // 退出登录
  const handleLogOut = () => {
    _userService.onLogOut().then(res => {
      _commonUtil.removeStorage('userInfo')
      window.location.href = '/login';
      _commonUtil.successTips(res)
    }).catch(err => {
      _commonUtil.errorTips(err)
    })
  }

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo"> 后台管理 </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            { showMenu(routes) }
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background">
           <div className="login-out">
              <div className="login-title"><UserOutlined style={{marginRight: '8px'}}/>{username ? (`欢迎：${username}`) :('欢迎您')}<CaretDownOutlined /></div>
              <div className="login-out-content" onClick={handleLogOut}><LoginOutlined style={{paddingRight: '12px', boxSizing: 'border-box'}} /> 退出登录</div>
           </div>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <BreadcrumbItem urlDetail={props.location} routes={routes}></BreadcrumbItem>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, background: '#fff'}}>
              {props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
}

export default withRouter(SiderDemo);

