import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Auth, Home } from 'pages';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Routes>
          <Route exact path='/im/*' element={<Home />} />
          <Route path='/login/*' element={<Auth />} />
          <Route path='/register/*' element={<Auth />} />
        </Routes>
      </div>
    );
  }
}

export default App;
