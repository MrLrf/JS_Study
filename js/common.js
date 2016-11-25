/*具有普适性的几个方法
 * addLoadEvent(function) 页面加载完执行function
 * insertAfter(newElement, targetElement) 在一个节点后插入一个节点
 */

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
