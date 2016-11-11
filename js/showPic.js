addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);
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
//	if (!document.getElementsByTagName || !document.getElementsById) return false;
//	if (!document.getElementById("imagegallery")) return false;
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
/*使用DOM方法动态的添加只为showPic脚本服务的img和p标签 */
function preparePlaceholder() {
	//创建一个img元素节点
	var placeholder = document.createElement("img");
	var description = document.createElement("p");
	var desctxt = document.createTextNode("Choose an image.");
	//为一个标签设置属性
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "img/Chrysanthemum.jpg");
	placeholder.setAttribute("alt", "my image gallery");
	description.setAttribute("id", "description");
	//将一个标签追加到另一个标签中
	description.appendChild(desctxt);
	//把img和p标签追加到body上
//	document.body.appendChild(placeholder);
//	document.body.appendChild(description);
	//另一种办法
	var gallery = document.getElementById("imagegallery");
	insertAfter(placeholder, gallery);
	insertAfter(description, placeholder);
}
