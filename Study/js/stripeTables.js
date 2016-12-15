/*
 * 为一个表格添加斑马线效果
 */
function stripeTables() {
	var tables = document.getElementsByTagName("table");
	var old, rows;
	for (var i = 0; i < tables.length; i++) {
		old = false;
		rows = tables[i].getElementsByTagName("tr");
		for (var j = 0; j < rows.length; j++) {
			if (old == true) {
				rows[j].style.backgroundColor = "#ffc";
				old = false;
			} else {
				old = true;
			}
		}
		
	}
}
addLoadEvent(stripeTables);
