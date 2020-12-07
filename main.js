let menu = document.getElementById("left-bar-menu").style;
let menu_trs = document.getElementById("block-menu-trs").style;

function sideMenuFunc(x) {
	if (x == 1) {
		if (menu.transform = "translateX(-290px)") menu.transform = "translateX(0px)";
		if (menu_trs.display = "none") menu_trs.display = "block";
		setTimeout(() => menu_trs.backgroundColor = "#333333", 200);
	} else if (x == 2) {
		if (menu.transform = "translateX(0px)") menu.transform = "translateX(-290px)";
		menu_trs.backgroundColor = "transparent";
		setTimeout(() => {if (menu_trs.display = "block") menu_trs.display = "none";}, 350);
	}
}

document.getElementById('header-block-btn').addEventListener('click', (e) => sideMenuFunc(1));
document.getElementById("left-bar-menu-btn").addEventListener("click", (e) => sideMenuFunc(2));
document.getElementById("block-menu-trs").addEventListener("click", (e) => sideMenuFunc(2));



