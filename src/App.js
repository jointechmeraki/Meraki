import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/fonts.css';
import './assets/css/inputs.css';
import './assets/css/reset.css';
import './assets/css/style.css';
import Routers from './modules/_routers/Routers'
import Menu from './modules/shared/menu/Menu';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu></Menu>
        <div className="container-page">
          <Routers></Routers>
        </div>
      </BrowserRouter>
    </div>
  );
}
