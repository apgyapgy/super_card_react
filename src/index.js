import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter,Route  } from 'react-router-dom';

import './index.css';
ReactDOM.render(
	<BrowserRouter>
	  <div>
	    <Route path='/'  component={App}/>
	  </div>
	</BrowserRouter>,
	document.getElementById('root')
)