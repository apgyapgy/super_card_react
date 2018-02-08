import React,{Component} from 'react';
export class CouponIcon extends Component{
	render(){
		return(
			<div className="coupon_icon">
				<img alt="" src={require('./images/coupon_icon.png')}/>
				{this.props.nums>0?<span >{this.props.nums}</span>:''}				
			</div>
		)
	}
}
//底部按钮
export class Footer extends Component{
	render(){
		return(
			<div className="footer_wrapper">
				<img alt="" src={require('./images/footer_top.png')}/>
				<div className="footer">{this.props.isVip===true?'惠员卡付款':'0.99元开通'}</div>
			</div>
		)
	}
}