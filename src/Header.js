import React from 'react';
// 导入样式 
import './css/Header.css';

class Header extends React.Component{
	constructor(props){
		super(props);
		this.back = this.back.bind(this);
	}
	back(){
		if(this.props.back === 'false'){
			return;
		}
		window.history.back();
	}
	render(){
		return(
			<div className="re_header_wrappper">
				<div className="re_header">
					<div onClick={this.back} className="re_header_left">
						 {this.props.back==='false'?'':'< 返回'}
					</div>
					<div className="re_header_center">{this.props.title}</div>
					<div className="re_header_right">
						<span></span>
						<span></span>
						<span></span>
					</div>	    
				</div>
			</div>
		)
	}
}
export default Header;