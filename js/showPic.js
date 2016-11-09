function showPic(whichpic) {
	//得到对象的href属性值
	var source = whichpic.getAttribute("href");
	//通过id获取dom中的对象
	var placeholder = document.getElementById("placeholder");
	//设置对象的src属性值
	placeholder.setAttribute("src", source);
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
	return true;
}
/*给<a>标签添加事件处理函数*/
function prepareGallery() {
	//检查浏览器是否理解DOM方法
	if (!document.getElementsByTagName || !document.getElementsById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	//为每个<a>标签设置onclick事件
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			return !showPic(this);
			//让其返回值为false让其认为没有点击链接
			//return false;
		}
	}
}
/*将想要在页面加载完毕执行的函数绑定到onload事件上  参数:想要执行的函数名*/
function addLoadEvent(func) {
	var oldonload = window.onload;
	if(typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
