import React from 'react';
import { Link } from 'react-router-dom';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { Button, Block } from 'components';
export default class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <div className='auth__top'>
          <h2>Loggin to account</h2>
          <p>Please, enter to your account</p>
        </div>
        <Block>
          <Form
            name='normal_login'
            className='login-form'
            initialValues={{ remember: true }}
          >
            <Form.Item
              name='username'
              rules={[
                { required: true, message: 'Please input your Username!' },
              ]}
            >
              <Input
                prefix={<UserOutlined className='site-form-item-icon' />}
                size='large'
                placeholder='Username'
              />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                { required: true, message: 'Please input your Password!' },
              ]}
            >
              <Input
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                size='large'
                placeholder='Password'
              />
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
              >
                Log in
              </Button>
            </Form.Item>
            <Link className='auth__register_link' to='/register'>
              Register
            </Link>
          </Form>
        </Block>
      </div>
    );
  }
}
