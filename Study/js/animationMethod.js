/*
 * setTimeout("function()", interval)
 * 让名为第一个参数的方法经过interval毫秒后开始执行
 * clearTimeout(movement)
 * 在等待时间里可以取消这个方法
 * parseInt(string)
 * 把一个以数字开头的字符串前边的数字提取出来
 */
var movement = null;
function positionMassege() {
	if (!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";
	//调用moveElement()函数实现移动
	moveElement("message", 125, 25, 20);
}
function moveMessage() {
	if (!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	/*瞬间移动
	elem.style.left = "200px";
	*/
	//使message元素以每次1像素的方式在浏览器中移动
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if(xpos == 200 && ypos == 100) {
		return true;
	}
	if(xpos < 200) {
		xpos++;
	}
	if(xpos > 200) {
		xpos --;
	}
	if(ypos < 100) {
		xpos++;
	}
	if(ypos > 100) {
		xpos --;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	//movement = setTimeout("moveMessage()", 10);
}

addLoadEvent(positionMassege);