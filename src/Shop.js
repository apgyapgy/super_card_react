import React,{Component} from 'react';
import Header from './Header.js';
import {Footer} from './Template.js';

import './css/Shop.css';

class Shop extends Component{
	constructor(){
		super();
		this.state = {
			isVip:false,
			imgs:[]
		}
	}
	componentDidMount(){
		var _search = window.location.search ? window.location.search.replace('?','') : '';
		var _searchArr = _search.split('&');
		var _arr = [];//地址栏参数数组
		for(var key in _searchArr){
			var _a = _searchArr[key].split('=');
			_arr[_a[0]] = _a[1];
		}
		var _imgs = _arr['imgs'];//店铺图片
		_imgs = _imgs.split('*');
		this.setState({
			imgs:_imgs,
			isVip:_arr['isVip']
		});
	}
	createElement(){
		var _item = [];
		for(var key in this.state.imgs){
			if(this.state.imgs[key] !== ''){
				_item.push(<img key={key} alt="" src={'https://staticds.fuiou.com'+this.state.imgs[key]}/>)
			}
		}
		return _item;
	}
	render(){
		return(
			<div className="shop_wrapper">
				<Header title="超级惠员卡"/>
				{this.createElement()}
				<Footer isVip={this.state.isVip}/>
			</div>
		)
	}
}

export default Shop;