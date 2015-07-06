$(document).ready(function(){
	$('.panel').each(function(index, current){
		$(current).hide();
	});
	$(".se-pre-con").delay(600).fadeOut(1500);
	var ul = document.querySelector('ul');
	for (var i = ul.children.length; i >= 0; i--) {
		ul.appendChild(ul.children[Math.random() * i | 0]);
	} 
	
	$('.panel').each(function(index, item){
		ajaxStuffShow($(item).data('id'), item);
	});

	var clicked = 0;
	$("#onoffswitch").click(function(){
		if (clicked == 0){
			$('.panel').each(function(index, current){
				$(current).show();
			});
			clicked = 1;
		} else {
			$('.panel').each(function(index, item){
				ajaxStuffHide($(item).data('id'), item);
			});
			clicked = 0;
		}
	});
});

function ajaxStuffShow(id, current){
	var result;
	var xmlhttp;
	if (window.XMLHttpRequest){
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			if (xmlhttp.responseText == '{"onair":true}'){
				$(current).show();
			}
		}
	}

	xmlhttp.open("GET","https://api.dailymotion.com/video/"+id+"?fields=onair "+Math.floor((Math.random()*100)+1),true);
	xmlhttp.send();	
}

function ajaxStuffHide(id, current){
	var result;
	var xmlhttp;
	if (window.XMLHttpRequest){
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			if (xmlhttp.responseText == '{"onair":false}'){
				$(current).hide();
			}
		}
	}

	xmlhttp.open("GET","https://api.dailymotion.com/video/"+id+"?fields=onair "+Math.floor((Math.random()*100)+1),true);
	xmlhttp.send();	
}