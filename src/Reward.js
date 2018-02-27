import React,{Component} from 'react';
import Header from './Header.js';
import {Footer} from './Template.js';

import './css/Reward.css';
import {getParams} from './common.js';
import axios from  'axios';
import { Modal} from 'antd';
class Reward extends Component{
	constructor(){
		super();
		this.state = {
			isVip:false,
			isReceived:false,
			loginId:'15316117950',
			recordInfoData:{},
			desc:'',
			modalVisible:false
		}
	}
	componentDidMount(){
		var _search = this.props.location.search?this.props.location.search.replace('?',''):'';
		if(_search){
			var _params = getParams(_search);
			if(_params['isVip'] !== undefined){
				this.setState({
					isVip:_params['isVip'] === 'true' ? true : false
				});
				this.getRewardInfo();
			}
			
		}
	}
	getRewardInfo(){//获取用户奖励金信息
		var _this = this;
		axios.get('app_vip/qryUserInf?loginId='+this.state.loginId)
		.then((res) => {
			if(res.data.code === 200){
				res = res.data.data;
				_this.setState({
					recordInfoData:res,
					isReceived:res.exsit==='1'?true:false
				});
			}
		}).catch((err) => {
			console.error("err:",err);
		});
	}
	takeReward(){//领取奖励金
		var _this = this;
		axios.get('app_vip/receiveReward?loginId='+this.state.loginId+'&src=2&orderNo=')
		.then((res) => {
			if(res.data.code === 200){
				_this.getRewardInfo();
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
			<div className="reward_wrapper">
				<Header title="每日奖励金"/>
				<div className="reward_header">
					<div className="reward_btn" onClick={this.takeReward.bind(this)}>{this.state.isReceived === true ? '已领取':'点击'}<br/>{this.state.isReceived === true ? this.state.recordInfoData.lastAmt+'元':'领取'}</div>
				</div>
				<div className="reward_info_wrapper">
					<div className="reward_info">
						<div className="r_i_left">
							<span className="bold">今日累计</span>
							<span className="fine">{this.state.recordInfoData.totalAmt+'元'}</span>
						</div>
						<div className="r_i_right">
							<span className="bold">奖励余额</span>
							<span className="fine">{this.state.recordInfoData.amount+'元'}</span>
						</div>
					</div>
				</div>
				<div className="reward_help clear">
					<div className="reward_help_title">奖励金领取指南</div>
					<div className="help_item">
						<div className="help_left">01</div>
						<div className="help_right">每日可领<span>1</span>次;</div>
					</div>
					<div className="help_item">
						<div className="help_left">02</div>
						<div className="help_right">每笔消费后可领<span>1</span>次;</div>
					</div>
					<div className="help_item">
						<div className="help_left">03</div>
						<div className="help_right">奖励金可叠加使用;</div>
					</div>
					<div className="help_item">
						<div className="help_left">04</div>
						<div className="help_right">奖励金仅限超级惠员卡惠员领取;</div>
					</div>
				</div>
				<Footer isVip={this.state.isVip}/>
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

export default Reward;