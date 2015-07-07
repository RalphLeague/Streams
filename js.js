$(document).ready(function(){
	var found = false;
	$.ajaxSetup({ cache: false });
	
	$('.panel').each(function(index, current){
		$(current).hide();
	});
	
	$(".se-pre-con").delay(600).fadeOut(1500);
	var ul = document.querySelector('ul');
	for (var i = ul.children.length; i >= 0; i--) {
		ul.appendChild(ul.children[Math.random() * i | 0]);
	} 
	
	$('.panel').each(function(index, item){
		ajax($(item).data('id'), item, true);
	});
	if (found == false) {
		$("#found").html("<h1>No Streams Currently Live</h1>");
	}
	var clicked = 0;
	$("#onoffswitch").click(function(){
		if (clicked == 0){
			$('.panel').each(function(index, current){
				$(current).show();
			});
			clicked = 1;
		} else {
			$('.panel').each(function(index, item){
				ajax($(item).data('id'), item, false);
			});
			clicked = 0;
		}
	});
});

function ajax(id, current, show){
	$.ajax({
		type:     "GET",
		url:      "https://api.dailymotion.com/video/"+id+"?fields=onair",
		dataType: "jsonp",
		success: function(data){
			if (data.onair == true && show == true){
				$(current).show();
				var found = true;
			} else if (data.onair == false && show == false){
				$(current).hide();
				var found = true;
			}
		}
	});
}