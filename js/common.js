/*具有普适性的几个方法
 * addLoadEvent(function) 页面加载完执行function
 * insertAfter(newElement, targetElement) 在一个节点后插入一个节点
 * getNextElement(node) 获得一个节点的下一个元素节点
 * moveElement(elementID, final_x, finale_y, interval) 按照参数移动一个元素
 */

var movement = null;
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
/*在一个节点后边插入一个节点*/
function insertAfter(newElement, targetElement) {
	//获得一个节点的父节点
	var parent = targetElement.parentNode;
	//element.lastChild 获得一个节点的最后一个孩子节点
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		//element.insertBefore(new, target) 在element子节点中在target前边插入new节点
		//element.nextSibling() 获得element的下一个兄弟节点
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}
/*获得一个节点的下一个元素节点*/
function getNextElement(node) {
	if(node.nodeType == 1) {
		return node;
	}
	if(node.nextSibling) {
		return getNextElement(node.nextSibling);
	}
	return null;
}
/*按照参数移动一个元素*/
function moveElement(elementID, final_x, final_y, inteval) {
	if (!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	//解决settimeout队列中存在多个事件的问题
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
	//如果没有left和top属性，给他设置一个默认值
	if (!elem.style.left) {
		elem.style.left = "0px";
	}
	if (!elem.style.top) {
		elem.style.top = "0px";
	}
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	//Math.ceil(number)返回一个不小于number的值的一个整数
	var dist = 0;
	if(xpos == final_x && ypos == final_y) {
		return true;
	}
	if(xpos < final_x) {
		var dist = Math.ceil((final_x - xpos) / 10);
		xpos += dist;
	}
	if(xpos > final_x) {
		var dist = Math.ceil((xpos - final_x) / 10);
		xpos -= dist;
	}
	if(ypos < final_y) {
		var dist = Math.ceil((final_y -ypos) / 10);
		ypos += dist;
	}
	if(ypos > final_y) {
		var dist = Math.ceil((ypos - final_y) / 10);
		ypos -= dist;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	//注意这里elementID要放在''里
	var repeat = "moveElement('" + elementID + "', " + final_x + ", " + final_y + ", " + inteval + ")";
	elem.movement = setTimeout(repeat, inteval);
}
