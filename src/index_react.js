import React from 'react';
import ReactDOM from 'react-dom';

import style from './style.css';
import logo from './assets/webpack-logo.svg';
import data from './data.json';
import { HelloWorld } from './components/helloWorld.jsx';


ReactDOM.render(
  // primer parametro recibe los props
  <HelloWorld name="React" logo={logo} menu={data.links} />,
  //  segundo parametro recibe el destino a donde se envia los datos
  document.getElementById("app")
)
