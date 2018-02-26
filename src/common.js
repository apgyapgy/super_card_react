export function getParams(_search){
	var _arr = _search.split('&');
	if(_arr.length){
		var _searchArr = [];
		for(var key in _arr){
			var _item = _arr[key].split("=");
			_searchArr[_item[0]] = _item[1]
		}
		return _searchArr;
	}else{
		return false;
	}
}