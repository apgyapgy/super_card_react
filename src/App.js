import React,{Component} from 'react';
//返回顶部按钮
// import { BackTop } from 'antd';
// import {Carousel} from 'antd';
// 头部
import Header from './Header.js';
import {CouponIcon} from './Template.js';
import './css/App.css';
//banner，轮播图
class Banner extends Component{
	render(){
		return(
			<div className="banner_wrapper">
				<div className="banner">
					<img className="banner_img" src={require('./images/banner_1.png')}/>
				</div>
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
					text:'快乐柠檬'
				},{
					imgUrl:'./images/menu_reward.png',
					text:'天天奖励金'
				},{
					imgUrl:'./images/menu_gift.png',
					text:'邀请有礼'
				},{
					imgUrl:'./images/menu_concat.png',
					text:'在线客服'
				}
			]
		}
	}
	render(){
		return(
			<div className="menu_wrapper">
				<div className="menu_item">
					<img src={require('./images/menu_shop.png')}/>
					<span>快乐柠檬</span>
				</div>
				<div className="menu_item">
					<img src={require('./images/menu_reward.png')}/>
					<span>天天奖励金</span>
				</div>
				<div className="menu_item">
					<img src={require('./images/menu_gift.png')}/>
					<span>邀请有礼</span>
				</div>
				<div className="menu_item">
					<img src={require('./images/menu_concat.png')}/>
					<span>在线客服</span>
				</div>
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
					<img className="shop_img" src={require('./images/shop.jpg')} alt="" />
					<img className="shop_img" src={require('./images/shop.jpg')} alt="" />
					<img className="shop_img" src={require('./images/shop.jpg')} alt="" />
					<img className="shop_img" src={require('./images/shop.jpg')} alt="" />
					<img className="shop_img" src={require('./images/shop.jpg')} alt="" />
					<img className="shop_img" src={require('./images/shop.jpg')} alt="" />
					<img className="shop_img" src={require('./images/shop.jpg')} alt="" />
					<img className="shop_img" src={require('./images/shop.jpg')} alt="" />
					<img className="shop_img" src={require('./images/shop.jpg')} alt="" />
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
				<img className="patch_1" src={require('./images/patch_1.png')}/>
				<img className="patch_2" src={this.props.isVip==true?require('./images/patch_2_2.png'):require('./images/patch_2.png')}/>
				<img className="patch_3" src={require('./images/patch_3.png')}/>
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
			showPatchFlag:false
		}
		this.setState.bind(this);
	}
	showPatch(){
		this.setState({showPatchFlag:true});
	}
	render(){
		return(
			<div>
				<Header title="超级惠员卡"/>
				<Banner/>
				<Menu/>
				<Shop/>
				<CouponIcon nums={this.state.usefulCouponNums}/>
				{this.state.shopPatchFlag==true?<Patch/>:''}
			</div>
		)
	}
}
export default App;