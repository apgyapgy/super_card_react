//import 'whatwg-fetch';

import axios from  'axios';
export function get(url){
	var isDebug = false,preUrl='';
	if(isDebug){
		preUrl = 'https://dswx-test.fuiou.com/o2o/';
	}else{
		preUrl = 'https://chi.fuiou.com/';
	}
	axios.get(preUrl + url)
	.then((res) => {
		console.log("res:",res);
	}).catch((err) => {
		console.error("err:",err);
	})
	/*fetch(preUrl + url,{
	//fetch('./App.js',{
		method:'get',
		mode:'no-cors',
		credentials: 'include',
		headers: {
		    "Content-Type": "application/x-www-form-urlencoded"
		}
	}).then(response => {
		console.log("res:",response);
	    if (response.ok) {
	      	return response.json()
	    } else {
	      	return Promise.reject({
        		status: response.status,
        		statusText: response.statusText
      		})
	    }
  	})
  	.then(data => console.log('data is', data))
  	.catch(error => console.log('error is', error));*/
}

/*return new Promise((resolve,reject) => {
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