window.onload = function() {
//	var testdiv = document.getElementById("testdiv");
//	alert(testdiv.innerHTML);
//	testdiv.innerHTML = "<p>I insert <em>this</em> content.</p>";
	
	var para = document.createElement("p");
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
	var txt = document.createTextNode("Hello world!");
	para.appendChild(txt);
	
	var para1 = document.createElement("p");
	var txt1 = document.createTextNode("This is ");
	var emphasis = document.createElement("em");
	var txt2 = document.createTextNode("my");
	var txt3 = document.createTextNode(" content.");
	para1.appendChild(txt1);
	para1.appendChild(emphasis);
	emphasis.appendChild(txt2);
	para1.appendChild(txt3);
	testdiv.appendChild(para1);
	
}
