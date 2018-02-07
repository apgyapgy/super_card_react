import React from 'react';
// 导入样式 
import './css/Header.css';

class Header extends React.Component{
	// constructor(props){
	// 	super(props);
	// }
	render(){
		return(
			<div className="re_header_wrappper">
				<div className="re_header">
					<div className="re_header_left">
						&lt; 返回
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