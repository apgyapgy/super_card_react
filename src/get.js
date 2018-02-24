//import 'whatwg-fetch';

import axios from  'axios';
export function get(url,success){
	axios.get(url)
	.then((res) => {
		console.log("res:",res);
	}).catch((err) => {
		console.error("err:",err);
	})
}

/*return new Promise((resolve,reject) => {

	if(isDebug){
		preUrl = 'https://dswx-test.fuiou.com/o2o/';
	}else{
		preUrl = 'https://chi.fuiou.com/';
	}
	fetch(`${origin}${url}`,{
		method:'POST',
		header:{
			"Content-Type": "application/x-www-form-urlencoded"
		},
		mode:'no-cors'
	}).then((res) => {
		console.log("res:",res);
	}).then((json) => {
		console.log("res:",json);
		return resolve(json);
	}).catch((err) => {
		console.error(err);
		return reject(err);
	});
});*/