import React, { useState } from 'react';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import {
  MailOutlined,
  UserOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  InfoCircleTwoTone,
} from '@ant-design/icons';
import { Button, Block } from 'components';

const success = false;

const RegisterForm = (props) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    dirty,
    isSubmitting,
  } = props;

  const isButtonDisabled = !isValid || !dirty || isSubmitting;

  return (
    <div>
      <div className='auth__top'>
        <h2>Registration</h2>
        <p>To enter the chat, you need to register</p>
      </div>
      <Block>
        {!success ? (
          <Form onFinish={handleSubmit} className='login-form'>
            <Form.Item
              validateStatus={
                !touched.email ? '' : errors.email ? 'error' : 'success'
              }
              help={!touched.email ? '' : errors.email}
              hasFeedback
            >
              <Input
                id='email'
                prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                size='large'
                placeholder='E-Mail'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                size='large'
                placeholder='Your Name'
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              validateStatus={
                !touched.password ? '' : errors.password ? 'error' : 'success'
              }
              help={!touched.password ? '' : errors.password}
              hasFeedback
            >
              <Input.Password
                id='password'
                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                size='large'
                type={passwordVisible ? 'text' : 'password'}
                placeholder='Password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                visibilityToggle={true}
                onClick={() => setPasswordVisible(!passwordVisible)}
              />
            </Form.Item>
            <Form.Item>
              <Input.Password
                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                size='large'
                type={confirmPasswordVisible ? 'text' : 'password'}
                placeholder='Confirm Password'
                value={values.confirm}
                onChange={handleChange}
                onBlur={handleBlur}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                visibilityToggle={true}
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
              />
            </Form.Item>
            <Form.Item>
              {isSubmitting && !isValid && <span>Error!</span>}
              <Button
                onClick={handleSubmit}
                type='primary'
                size='large'
                disabled={isButtonDisabled}
              >
                Register
              </Button>
            </Form.Item>
            <Link className='auth__register-link' to='/login'>
              Log in to account
            </Link>
          </Form>
        ) : (
          <div className='auth__success-block'>
            <div>
              <InfoCircleTwoTone style={{ fontSize: '50px', color: 'green' }} />
            </div>
            <h2>Confirm your account</h2>
            <p>
              A letter with a confirmation link has been sent to your email.
            </p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;
