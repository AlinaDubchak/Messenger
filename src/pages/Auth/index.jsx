import React from 'react';
import { LoginForm, RegisterForm } from 'modules';
import './Auth.scss';

const Auth = () => {
  const { pathname } = window.location;

  if (pathname === '/login') {
    return (
      <section className='auth'>
        <div className='auth__content'>
          <LoginForm />
        </div>
      </section>
    );
  } else if (pathname === '/register') {
    return (
      <section className='auth'>
        <div className='auth__content'>
          <RegisterForm />
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Auth;
