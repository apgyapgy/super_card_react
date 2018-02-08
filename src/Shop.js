import React,{Component} from 'react';
import Header from './Header.js';
import {Footer} from './Template.js';

import './css/Shop.css';

class Shop extends Component{
	constructor(){
		super();
		this.state = {
			isVip:false
		}
	}
	render(){
		return(
			<div className="shop_wrapper">
				<Header title="超级惠员卡"/>
				<img alt="" src={require('./images/shop_1.jpg')}/>
				<img alt="" src={require('./images/shop_2.jpg')}/>
				<img alt="" src={require('./images/shop_3.jpg')}/>
				<Footer isVip={this.state.isVip}/>
			</div>
		)
	}
}

export default Shop;