import React,{Component} from 'react';
class CouponIcon extends Component{
	render(){
		return(
			<div className="coupon_icon">
				<img src={require('./images/coupon_icon.png')}/>
				<span>0</span>
			</div>
		)
	}
}
module.exports = {
	CouponIcon:CouponIcon
}