import Header from './Header.js';
import React,{Component} from 'react';

import axios from 'axios';
import './css/ConfirmOrder.css';
import {getParams} from './common.js';
import { Modal} from 'antd';
class ConfirmOrder extends Component{
	constructor(props){
		super(props);
		this.state = {
			payInfo:{},
			couponsList:[],
			canUseRewardGoldNum:15,
			couponAmt:0,
			payCode:'201802270900011182',
			loginId:'13625625040',
			desc:'',
			modalVisible:false
		}
	}
	pay(){
		console.log("pay");
	}
	hideCoupon(){
		console.log("hideCoupon");
	}
	showCoupon(){
		console.log("showCoupon");
	}
	selectCoupon(){
		console.log("selectCoupon");
	}
	componentDidMount(){
		var _search = this.props.location.search?this.props.location.search.replace('?',''):'';
		if(_search){
			var _params = getParams(_search);
			if(_params['isVip'] !== undefined){
				this.setState({
					payCode:_params['no']
				});
			}
		}
		this.getOrderInfo();
	}
	componentWillUnmount(){}
	getOrderInfo(){//获取订单信息
		var _this = this;
		axios.get('wx_vip/orderPayQry?loginId='+this.state.loginId)
		.then((res) => {
			if(res.data.code === 200){
				res = res.data.data;
				console.log("orderInfo:",res);
				_this.setState({
					payInfo:res
				});
			}
		}).catch((err) => {
			console.error("err:",err);
		});
	}
	handleCancel(){
		this.setState({
			modalVisible:false
		});
	}
	handleOk(){
		this.setState({
			modalVisible:false
		});
	}
	render(){
		return(
			<div className="confirm_order_wrapper">
				<Header title="支付确认页"/>
				<div onClick={this.hideCoupon} className='amount_info'>
	  				<div className='origin_total'>
	  					门店价总计：<span className='right'>{this.state.payInfo.orderAmtOrg?this.state.payInfo.orderAmtOrg/100:0}元</span>
	  				</div>
	  				<div className='origin_amount'>
	  					超级惠员价：<span className='right'>{this.state.payInfo.orderAmt?this.state.payInfo.orderAmt/100:0}元</span>
	  				</div>
	  				<div className="coupon_discount" onClick={this.showCoupon}>
	  					优惠券抵扣：<span className={["right",this.state.couponsList.length>0?'active':''].join(" ")}>{this.state.couponAmt?this.state.couponAmt/100+'元 >':(this.state.couponsList.length>0?'0元 >':'无')}</span>
	  				</div>
	  				{
	  					this.state.canUseRewardGoldNum>0 ?
		  					<div className="coupon_discount">
		  						奖励金抵扣：<span className={`right ${this.state.canUseRewardGoldNum>0?'active':''}`}>{this.state.canUseRewardGoldNum>0?this.state.canUseRewardGoldNum/100:0}元</span>
		  					</div>
		  				:''
	  				}
	  				
	  				<div className='pay_amount'>
	  					应付金额： <span className='right'>{(this.state.payInfo.orderAmt-this.state.couponAmt-this.state.canUseRewardGoldNum)>0?(this.state.payInfo.orderAmt-this.state.couponAmt-this.state.canUseRewardGoldNum)/100:0}元</span>
	  				</div>
				</div>
				<div catchtap="pay" className='pay'>立即支付</div>
				{
					this.state.couponShowFlag?
						<div onClick={this.hideCoupon} className="order-coupon clearfix">
						  	<div onClick={this.selectCoupon} className='coupon clearfix'>
							    <div className="coupon-left">
							      <div className="select active">
							      </div>
							      <div className="coupon-price">￥10元</div>
							      <div className='coupon-condition'>满5元使用</div>
							      
							    </div>
							    <div className="coupon-right">
							      <div className='coupon-name'>哈哈</div>
							      <div className="coupon-info">有效期到:20180714</div>
							    </div>
						  	</div>
						</div>
						:''
				}
				<Modal
		          title="提示"
		          visible={this.state.modalVisible}
		          onOk={this.handleOk.bind(this)}
		          onCancel={this.handleCancel.bind(this)}
	        	>
	          		<p>{this.state.desc}</p>
	        	</Modal>
			</div>
		)
	}
}
export default ConfirmOrder;