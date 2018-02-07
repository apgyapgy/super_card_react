import React,{Component} from 'react';
export class CouponIcon extends Component{
	render(){
		return(
			<div className="coupon_icon">
				<img src={require('./images/coupon_icon.png')}/>
				{this.props.nums>0?<span >{this.props.nums}</span>:''}				
			</div>
		)
	}
}