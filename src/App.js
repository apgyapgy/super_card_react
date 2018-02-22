import React,{Component} from 'react';
import {Link} from 'react-router-dom';
//返回顶部按钮
// import { BackTop } from 'antd';
import {Carousel} from 'antd';
// 头部
import Header from './Header.js';
import {CouponIcon} from './Template.js';
import './css/App.css';

import {get} from './get.js';
//banner，轮播图
class Banner extends Component{
	render(){
		return(
			<div className="banner_wrapper">
				<Carousel className="banner" autoplay>
					<div>
						<img className="banner_img" alt="" src={require('./images/banner_1.png')}/>
					</div>
					<div>
						<img className="banner_img" alt="" src={require('./images/banner_2.png')}/>
					</div>
				</Carousel>
				<div className="btn">超级惠员卡</div>
			</div>
		)
	}
}
//菜单即四个icon
class Menu extends Component{
	constructor(){
		super();
		this.state = {
			menu:[
				{
					imgUrl:'./images/menu_shop.png',
					text:'快乐柠檬',
					nav:'/shop'
				},{
					imgUrl:'./images/menu_reward.png',
					text:'天天奖励金',
					nav:'/reward'
				},{
					imgUrl:'./images/menu_gift.png',
					text:'邀请有礼',
					nav:'/share'
				},{
					imgUrl:'./images/menu_concat.png',
					text:'在线客服',
					nav:''
				}
			]
		}
	}
	createElement(){
		var _items = [];
		this.state.menu.map((item,index) => {
			_items.push(
				<Link key={index} to={'' + item.nav}>
					<div className="menu_item">
						<img alt="" src={require(''+item.imgUrl)}/>
						<span>{item.text}</span>
					</div>
				</Link>
			);
		});
		return _items;
	}
	render(){
		return(
			<div className="menu_wrapper">
				{this.createElement()}
			</div>
		)
	}
}
//店铺
class Shop extends Component{
	render(){
		return(
			<div className="shop_wrapper">
				<div className="shop_title">附近店铺</div>
				<div className="shops clearfix">
					<Link to="/shop"><img className="shop_img" src={require('./images/shop.jpg')} alt="" /></Link>
					<Link to="/shop"><img className="shop_img" src={require('./images/shop.jpg')} alt="" /></Link>
					<Link to="/shop"><img className="shop_img" src={require('./images/shop.jpg')} alt="" /></Link>
					<Link to="/shop"><img className="shop_img" src={require('./images/shop.jpg')} alt="" /></Link>
					<Link to="/shop"><img className="shop_img" src={require('./images/shop.jpg')} alt="" /></Link>
					<Link to="/shop"><img className="shop_img" src={require('./images/shop.jpg')} alt="" /></Link>
					<Link to="/shop"><img className="shop_img" src={require('./images/shop.jpg')} alt="" /></Link>
					<Link to="/shop"><img className="shop_img" src={require('./images/shop.jpg')} alt="" /></Link>
					<Link to="/shop"><img className="shop_img" src={require('./images/shop.jpg')} alt="" /></Link>
				</div>
			</div>
		)
	}
}
//贴片
class Patch extends Component{
	render(){
		return(
			<div className="patch_wrapper">
				<img className="patch_1" alt="" src={require('./images/patch_1.png')}/>
				<img className="patch_2" alt="" src={this.props.isVip===true?require('./images/patch_2_2.png'):require('./images/patch_2.png')}/>
				<img className="patch_3" alt="" src={require('./images/patch_3.png')}/>
			</div>
		)
	}
}
class App extends Component{
	constructor(){
		super();
		this.state = {
			usefulCouponNums:0,
			isVip:false,
			showPatchFlag:false,
			loginId:'15316117950'
		}
		this.setState.bind(this);
	}
	showPatch(){
		this.setState({showPatchFlag:true});
	}
	componentDidMount(){
		get('app_vip/home?loginId='+this.state.loginId);
	}
	render(){
		return(
			<div>
				<Header title="超级惠员卡" back="false"/>
				<Banner/>
				<Menu/>
				<Shop/>
				<CouponIcon nums={this.state.usefulCouponNums}/>
				{this.state.shopPatchFlag===true?<Patch/>:''}
			</div>
		)
	}
}
export default App;