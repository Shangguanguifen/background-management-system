import { useEffect, useState } from 'react'
import './index.scss'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import User from 'service/userService'
import CommonUtil from 'util/common'

let _user = new User();
let _commonUtil = new CommonUtil();

const LoginForm = (props) => {
  let [redirect] = useState(_commonUtil.getUrlParam('redirect') || '/')
  useEffect(() => {
    document.title = '登录 - ManagaementSystem'
  }, [])

  const onFinish = (values) => {
    let loginInfo = {
      username: values.username,
      password: values.password
    }
    _user.login(loginInfo).then(res => {
      // 登录成功，跳转页面，并保存个人信息
      _commonUtil.successTips('登录成功');
      _commonUtil.setStorage('userInfo', res);
      props.history.push(redirect);
    }).catch(err => {
      // 登录失败，提示信息
      _commonUtil.errorTips(err);

    })
  };
  return (
    <div className="login-content">
      <div className="login-header">
        <h1 className="title">后台管理系统</h1>
        <p className="tip">为保护企业的数据安全，请妥善保管密码</p>
      </div>
      <Form
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
        initialValues={{
          username: 'admin',
          password: 'admin'
        }}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%', borderRadius: '4px'}}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm