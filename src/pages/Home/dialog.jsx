import React from 'react';
import Message from '../../components/Message';

import './Home.scss';

const Home = () => {
  return (
    <section className='home'>
      <Message
        avatar='https://images.unsplash.com/photo-1716112054546-3027ad687a62?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        text={'Hello, how are you?'}
        date='Mon May 20 2024 20:30:31 GMT+0300'
        isMe={false}
      />
      <Message
        avatar='https://images.unsplash.com/photo-1502310545462-02dcf20e748c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        text={'Hello!'}
        date='Mon May 20 2024 18:30:31 GMT+0300'
        isMe={true}
      />
    </section>
  );
};

export default Home;
