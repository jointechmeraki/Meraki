import React, { Component } from 'react';
import Routers from './modules/_routers/Routers'
import Menu from './modules/shared/menu/Menu';
import { BrowserRouter } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import './assets/css/style.css';

class App extends Component 
{
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Menu></Menu>
          <div className="container-page">
            <Routers></Routers>
          </div>
        </BrowserRouter>
  
        <NotificationContainer/>
      </div>
    );
  }
}

export default App;
