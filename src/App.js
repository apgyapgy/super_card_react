import React,{Component} from 'react';
import {Link} from 'react-router-dom';
//返回顶部按钮
// import { BackTop } from 'antd';
import {Carousel} from 'antd';
// 头部
import Header from './Header.js';
import {CouponIcon} from './Template.js';
import './css/App.css';
import axios from  'axios';
//import {get} from './get.js';
//banner，轮播图
class Banner extends Component{
	constructor(props){
		super(props);
	}
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
				<div className="btn">{this.props.isVip === true?'惠员卡付款':'0.99元开通'}</div>
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
	constructor(props){
		super(props);
	}
	createElement(){
		var _items = [];
		for(var key in this.props.shops){
			if(this.props.shops[key].vipLogo !== ''){
				_items.push(
					<Link key={key}
						to={{
							pathname:"/shop",
						  	search:'?imgs='+ this.props.shops[key].vipLogoDtl+'*'+this.props.shops[key].vipLogo2Dtl+'*'+this.props.shops[key].vipLogo3Dtl+'&isVip='+this.props.isVip
						}}
					>
						<img className="shop_img" src={'https://staticds.fuiou.com'+this.props.shops[key].vipLogo} alt="" />
					</Link>
				);
			}
		}

		/*this.props.shops.map((item,index) => {
			if(item.vipLogo !== ''){
				_items.push(
					<Link key={index} to="/shop">
						<img className="shop_img" src={'https://staticds.fuiou.com'+item.vipLogo} alt="" />
					</Link>
				);
			}
		});*/
		return _items;
	}
	render(){
		return(
			<div className="shop_wrapper">
				<div className="shop_title">附近店铺</div>
				<div className="shops clearfix">
					{this.createElement()}
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
			loginId:'15316117950',
			mchs:[],
			userInfo:{},
			usefulCouponsNum:0
		}
		this.setState.bind(this);
	}
	showPatch(){
		this.setState({showPatchFlag:true});
	}
	componentDidMount(){
		var _this = this;
		axios.get('app_vip/home?loginId='+this.state.loginId)
		.then((res) => {
			console.log("res:",res);
			if(res.data.code === 200){
				res = res.data.data;
				_this.setState({
					mchs:res.vipMchs,
					userInfo:res.vipUsr,
					isVip:res.isVip === '1' ? true : false,
					usefulCouponsNum:res.usefulCouponsNum
				});
			}
		}).catch((err) => {
			console.error("err:",err);
		});
		//get('app_vip/home?loginId='+this.state.loginId);
	}
	render(){
		return(
			<div>
				<Header title="超级惠员卡" back="false"/>
				<Banner isVip={this.state.isVip}/>
				<Menu/>
				<Shop isVip={this.state.isVip} shops= {this.state.mchs} />
				<CouponIcon nums={this.state.usefulCouponNums}/>
				{this.state.shopPatchFlag===true?<Patch/>:''}
			</div>
		)
	}
}
export default App;