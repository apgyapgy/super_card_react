import React,{Component} from 'react';
import Header from './Header.js';
import QRCode from 'qrcode-react';
import axios from 'axios';
import './css/Pay.css';
import { Modal} from 'antd';
import {Redirect} from 'react-router-dom';
class Pay extends Component{
	constructor(){
		super();
		this.state = {
			path:'',
			loginId:'13625625040',
			rewardAmt:'0',
			ws:undefined,
			desc:'',
			modalVisible:false,
			redirect: false  
		}
	}
	getQrCode(){//获取支付的二维码
		var _this = this;
		axios.get('app_vip/toPay?loginId='+this.state.loginId)
		.then((res) => {
			if(res.data.code === 200){
				res = res.data.data;
				console.log("toPay:",res);
				_this.setState({
					path:res.payCode,
					rewardAmt:res.rewardAmtYuan
				});
				_this.onSocket();
			}
		}).catch((err) => {
			console.error("err:",err);
		});
	}
	componentDidMount(){
		this.getQrCode();
	}
	onSocket(){
		var _this = this;
		// 打开一个 web socket
        _this.state.ws = new WebSocket("wss://dswx-test.fuiou.com/o2o/webSocket/qryVipOrder");
        _this.state.ws.onopen = function(){
          // Web Socket 已连接上，使用 send() 方法发送数据
          //ws.send("发送数据");
          console.log("socket连接成功...，",_this.state.path);
        	_this.state.ws.send(_this.state.path);
        };
        _this.state.ws.onmessage = function (evt){ 
          	var received_msg = evt.data;
          	console.log("数据已接收:",received_msg);
          	_this.setState({
          		redirect:true
          	});
        	_this.state.ws.close();
        };
        _this.state.ws.onclose = function(){ 
          	// 关闭 websocket
          	console.log("连接已关闭..."); 
       	};
	}
	componentWillUnmount(){
		this.state.ws.close();
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
		if (this.state.redirect) {  
		    return <Redirect push to={'/confirmOrder?no='+this.state.path}/>; 
		}  
		return(
			<div className="pay_wrapper clearfix">
				<Header title="向商家付款"/>
				<div className="header_back"></div>
				<QRCode className="qrcode" value={this.state.path}/>
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

export default Pay;