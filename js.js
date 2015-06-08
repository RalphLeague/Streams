$(document).ready(function(){
	$(".se-pre-con").delay(400).fadeOut("slow");
	var ul = document.querySelector('ul');
	for (var i = ul.children.length; i >= 0; i--) {
		ul.appendChild(ul.children[Math.random() * i | 0]);
	} 
});
