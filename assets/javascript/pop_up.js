var popUpEnabled = false;
			
function pop_up(popUpName) {
	if(var == false) {
			document.getElementById(popUpName).style.visibility = "visible";
			popUpEnabled = true;
		}
	else {
		document.getElementsByClass("options").style.visibility = "hidden";
		popUpEnabled = false;
	}
}