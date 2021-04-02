import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UnorderedListOutlined,

  DesktopOutlined,
  FormOutlined,
  UserOutlined,
  CaretDownOutlined,
  LoginOutlined
} from '@ant-design/icons';
import './index.scss';
import UserService from 'service/userService';
import CommonUtil from 'util/common';


let _userService = new UserService();
let _commonUtil = new CommonUtil();


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

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
            <Menu.Item key="1" icon={<DesktopOutlined />}>
              <NavLink to="/">首页</NavLink>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UnorderedListOutlined />} title="商品">
              <Menu.Item key="2">
                <NavLink to="/product">商品管理</NavLink>
              </Menu.Item>
              <Menu.Item key="3">品类管理</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<FormOutlined />} title="订单">
              <Menu.Item key="4">订单管理</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<UserOutlined />} title="用户">
              <Menu.Item key="5"><NavLink to="/user/userList">用户列表</NavLink></Menu.Item>
            </SubMenu>
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
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, background: '#fff'}}>
              {props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
}

export default SiderDemo

