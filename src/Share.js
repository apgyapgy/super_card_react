import React,{Component} from 'react';
//导入组件
import Header from './Header.js';
import {CouponIcon} from './Template.js';
import './css/Share.css';
class Share extends Component{
	constructor(){
		super();
		this.state = {
			nums:0
		}
	}
	render(){
		return(
			<div className="share_wrapper clearfix">
				<Header title="超级惠员卡"/>
				<div className="share_header">
					<img className="share_banner" src={require('./images/share_logo.png')} alt=""/>
					<div className="share_banner_btn">邀请“好”邻居 与他一起享优惠</div>
				</div>
				<div className="user_info_wrapper">
					<img className="user_avatar" src={require('./images/share_user_grey.png')} alt=""/>
					<div className="user_info">
						<div className="user_info_item">
							<div className="share_info_type">您已邀请</div>
							<div className="share_num">30人</div>
						</div>
						<div className="user_info_item">
							<div className="share_info_type">您已获得</div>
							<div className="share_num">30元</div>
						</div>
					</div>
				</div>
				<div className="share_transform clearfix">
					<div className="share_title orange">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<p>转发即赠</p>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="share_tip orange">
						<p>首次分享小程序至</p>
						<p>“社区好友微信群”即刻获得</p>
					</div>
					<img className="share_coupon_10" src={require('./images/share_coupon_10.png')} alt=""/>
					<div className="share_btn orange">马上去分享</div>
					<div className="share_tip">*小程序全部商家都可使用</div>
				</div>
				<div className="share_active_2 clearfix">
					<div className="share_title red">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<p>步步有礼</p>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="share_tip red">
						<p>累积邀请第1~5位用户注册</p>
						<p>每成功邀请1人，即可获得</p>
					</div>
					<img className="share_coupon_3" alt="" src={require('./images/share_coupon_3.png')}/>
					<div className="share_users">
						<img className="user" alt="" src={require('./images/share_user_pink.png')} />
						<img className="user" alt="" src={require('./images/share_user_pink.png')} />
						<img className="user" alt="" src={require('./images/share_user_pink.png')} />
						<img className="user" alt="" src={require('./images/share_user_grey.png')} />
						<img className="user" alt="" src={require('./images/share_user_grey.png')} />
					</div>
					<div className="share_btn red">马上去分享</div>
					<div className="share_tip">*小程序全部商家都可使用</div>
				</div>
				<div className="share_active_3 clearfix">
					<div className="share_title blue">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<p>大放送</p>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="share_tip blue">
						<p>累积邀请第5位以上用户注册</p>
						<p>每成功邀请1人，即可获得</p>
					</div>
					<img className="share_coupon_5" alt="" src={require('./images/share_coupon_5.png')}/>
					<div className="share_users">
						<img className="user" alt="" src={require('./images/share_user_blue.png')} />
						<img className="user" alt="" src={require('./images/share_user_blue.png')} />
						<img className="user" alt="" src={require('./images/share_user_blue.png')} />
						<img className="user" alt="" src={require('./images/share_user_blue.png')} />
						<img className="user" alt="" src={require('./images/share_user_grey.png')} />
					</div>
					<div className="share_btn blue">马上去分享</div>
					<div className="share_tip">*小程序全部商家都可使用</div>
				</div>
				<CouponIcon nums={this.state.usefulCouponNums}/>
			</div>
		)
	}
}
export default Share;