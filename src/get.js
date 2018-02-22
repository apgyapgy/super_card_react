import 'whatwg-fetch';
export function get(url){
	var isDebug = true,preUrl='';
	if(isDebug){
		preUrl = 'https://dswx-test.fuiou.com/o2o/';
	}else{
		preUrl = 'https://chi.fuiou.com/';
	}
	fetch(preUrl + url,{
		method:'get',
		mode:'no-cors',
		credentials: 'include',
		headers: {
		    "Content-Type": "application/x-www-form-urlencoded"
		}
	}).then(res => {
        console.log("res:",res);
    }).catch(e=>{console.log(e);})
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