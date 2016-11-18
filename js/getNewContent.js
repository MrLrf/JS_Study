/*
 * XMLHttpRequest对象的方法使用
 */
function getNewContent(){
	var request = getHTTPObjcet();
	if(request) {
		//open方法，参数分别表示请求类型（get post send）、服务器上将要访问的文件、是否以异步方式请求
		request.open("GET", "example.txt", true);
		//onreadystatechange是服务器给XMLHttpRequest对象送回响应是触发执行
		request.onreadystatechange = function() {
			//readyState代表不同的状态：0未初始化、1正在加载、2加载完毕、3正在交互、4完成
			if (request.readyState == 4) {
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById("new").appendChild(para);
			}
		};
		request.send(null);
	} else {
		alert("Sorry, your browser doesn\'t support XMLHttpRequest");
	}
}
addLoadEvent(getNewContent);