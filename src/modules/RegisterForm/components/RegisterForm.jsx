import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from 'antd';
import { Button, Block } from 'components';
import { CheckCircleTwoTone } from '@ant-design/icons';
export default class RegisterForm extends React.Component {
  render() {
    const success = false;
    return (
      <div>
        <div className='auth__top'>
          <h2>Registration</h2>
          <p>To enter to the chat you need to register</p>
        </div>
        <Block>
          {success ? (
            <div className='auth__success-block'>
              <div>
                <div className='auth__success-block'>
                  <CheckCircleTwoTone style={{ fontSize: '50px' }} />
                </div>
                <h2>Confirm your account</h2>
                <p>We sent a letter to your mail</p>
              </div>
            </div>
          ) : (
            <Form
              name='normal_login'
              className='login-form'
              initialValues={{ remember: true }}
            >
              <Form.Item
                name='Mail'
                rules={[
                  { required: true, message: 'Please input your Username!' },
                ]}
              >
                <Input size='large' placeholder='E-mail' />
              </Form.Item>
              <Form.Item
                name='username'
                rules={[
                  { required: true, message: 'Please input your Username!' },
                ]}
              >
                <Input size='large' placeholder='Name' />
              </Form.Item>

              <Form.Item
                name='password'
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password size='large' placeholder='Password' />
              </Form.Item>

              <Form.Item
                name='confirm'
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          'The new password that you entered do not match!'
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password size='large' placeholder='Confirm password' />
              </Form.Item>

              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='login-form-button'
                >
                  Register
                </Button>
              </Form.Item>
              <Link className='auth__register_link' to='/login'>
                Log-in to account
              </Link>
            </Form>
          )}
        </Block>
      </div>
    );
  }
}
