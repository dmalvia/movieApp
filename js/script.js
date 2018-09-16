
function showTabData(e, item) {
    var i, tabData, tabLink;

    tabData = document.getElementsByClassName("tab-data");
    for (i = 0; i < tabData.length; i++) {
        tabData[i].style.display = "none";
    }

    tabLink = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(" active", "");
    }

    document.getElementById(item).style.display = "block";
    e.currentTarget.className += " active";
}

function toggleMenu() {
	var x = document.getElementById("menu-option");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

window.onscroll = function() {calculateOffset()};

var header = document.getElementById("sticky-header");
var sticky = header.offsetTop;

function calculateOffset() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-hd-cl");
  } else {
    header.classList.remove("sticky-hd-cl");
  }
}

function goToCastDetail() {
	console.log('I am in function');
	var x = document.getElementById('spinner');
	x.style.display = "block";
	setTimeout(function() {
		x.style.display = "none";
		alert('Move to next cast detail page');	
	},3000);
}