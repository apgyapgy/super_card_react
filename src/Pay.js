import React,{Component} from 'react';
import Header from './Header.js';
import QRCode from 'qrcode-react';
import './css/Pay.css';
class Pay extends Component{
	constructor(){
		super();
		this.state = {
			path:'201802091456'
		}
	}
	render(){
		return(
			<div className="pay_wrapper clearfix">
				<Header title="向商家付款"/>
				<div className="header_back"></div>
				<QRCode className="qrcode" value={this.state.path}/>
			</div>
		)
	}
}

export default Pay;