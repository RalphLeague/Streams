$(window).load(function() {
	$(".se-pre-con").fadeOut("slow");;
});

$(document).ready(function(){
	var ul = document.querySelector('ul');
	for (var i = ul.children.length; i >= 0; i--) {
		ul.appendChild(ul.children[Math.random() * i | 0]);
	} 
});

