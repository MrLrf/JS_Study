function prepareSlideshow() {
	//确保元素存在
	if (!document.getElementById("linklist")) return false;
	//创建显示图片元素
	var slideshow = document.createElement("div");
	slideshow.setAttribute("id", "slideshow");
	var preview = document.createElement("img");
	preview.setAttribute("id", "preview");
	preview.setAttribute("alt", "building blocks of web design");
	preview.setAttribute("src", "img/topics.gif");
	slideshow.appendChild(preview);
	var list = document.getElementById("linklist");
	insertAfter(slideshow, list);
	//为图片应用样式
	var preview = document.getElementById("preview");
	//取得列表中所有的链接
	var list = document.getElementById("linklist");
	var links = list.getElementsByTagName("a");
	//为mouseover事件添加动画效果
	links[0].onmouseover = function() {
		moveElement("preview", -100, 0,10);
	}
	links[1].onmouseover = function() {
		moveElement("preview", -200, 0, 10);
	}
	links[2].onmouseover = function() {
		moveElement("preview", -300, 0, 10);
	}
}
addLoadEvent(prepareSlideshow);