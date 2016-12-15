function styleHeaderSiblings() {
	var headers = document.getElementsByTagName("h1");
	var elem;
	for (var i = 0; i < headers.length; i++){
		//得到<h1>标签后的元素节点
//		elem = getNextElement(headers[i].nextSibling);
		elem = headers[i].nextElementSibling;
		
		//设置elem的字体格式
		elem.style.fontWeight = "bold";
		elem.style.fontSize = "1.2em";
		elem.style.color = "red";
	}
}
addLoadEvent(styleHeaderSiblings);