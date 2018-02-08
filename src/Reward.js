import React,{Component} from 'react';
import Header from './Header.js';
import {Footer} from './Template.js';

import './css/Reward.css';

class Reward extends Component{
	constructor(){
		super();
		this.state = {
			isVip:false
		}
	}
	render(){
		return(
			<div className="reward_wrapper">
				<Header title="每日奖励金"/>
				<div className="reward_header">
					<div className="reward_btn">已领取<br/>1.22元</div>
				</div>
				<div className="reward_info_wrapper">
					<div className="reward_info">
						<div className="r_i_left">
							<span className="bold">今日累计</span>
							<span className="fine">1元</span>
						</div>
						<div className="r_i_right">
							<span className="bold">奖励余额</span>
							<span className="fine">1元</span>
						</div>
					</div>
				</div>
				<div className="reward_help clearfix">
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
			</div>
		)
	}
}

export default Reward;