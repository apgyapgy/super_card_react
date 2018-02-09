import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Shop from './Shop.js';
import Reward from './Reward.js';
import Share from './Share.js';
import Pay from './Pay';
import {BrowserRouter,Route} from 'react-router-dom';

import './css/index.css';


ReactDOM.render(
	(
		<BrowserRouter>
			<div>
	      		<Route exact path='/' component={App}/>
	      		<Route path='/shop' component={Shop}/>
	      		<Route path='/reward' component={Reward}/>
	      		<Route path='/share' component={Share}/>
	      		<Route path='/pay' component={Pay}/>
	      	</div>
	    </BrowserRouter>
	),
	document.getElementById('root')
)