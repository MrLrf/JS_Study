/*不同的浏览器使用不同的XMLHTTP版本，这个方法是为了兼容所有浏览器*/
function getHTTPObjcet() {
	if(typeof XMLHttpRequest == "undefined") {
		XMLHttpRequest = function() {
			try {return new ActiveXObject("Msxml2.XMLHTTP.6.0")}
				catch (e) {}
			try {return new ActiveXObject("Msxml2.XMLHTTP.3.0")}
				catch (e) {}
			try {return new ActiveXObject("Msxml2.XMLHTTP")}
				catch (e) {}
			return false;
		}
	}
	return new XMLHttpRequest();
}
