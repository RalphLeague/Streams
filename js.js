$(document).ready(function(){
	$("#found").hide();
	var found = false;
	$.ajaxSetup({ cache: false });
	console.log("f4")
	$('.panel').each(function(index, current){
		$(current).hide();
	});
	

	var ul = document.querySelector('ul');
	for (var i = ul.children.length; i >= 0; i--) {
		ul.appendChild(ul.children[Math.random() * i | 0]);
	} 
	
	$('.panel').each(function(index, item){
		ajax($(item).data('id'), item, true);
	});
	var clicked = 0;
	console.log("f44")
	$("#onoffswitch").click(function(){
		if (clicked == 0){
			console.log("f")
			$("#found").hide();
		//	$("#found").css('opacity','0');
			$('.panel').each(function(index, item){
				ajax($(item).data('id'), item, false, true);
			});
			clicked = 1;
		} else {
			$('.panel').each(function(index, item){
				ajax($(item).data('id'), item, false);
			});
			setTimeout(function() {
				if (found == false) {
					$("#found").html("<h1>No Streams Currently Live</h1>");
					setTimeout(function() {
					//$("#found").fadeIn(2000);
						$("#found").show();
						$("#found").css('opacity','1');
					}, 100);
				}
			 }, 200);
			clicked = 0;
		}
	});

	setTimeout(function() {
		if (found == false) {
			$(".se-pre-con").hide();
			$("#found").html("<h1>No Streams Currently Live</h1>");
			$("#found").show();
			//$("#found").fadeIn(2000);
			$("#found").css('opacity','1');
			
		}
     }, 2200);
	 
	function ajax(id, current, show, reverse){
		$.ajax({
			type:     "GET",
			url:      "https://api.dailymotion.com/video/"+id+"?fields=onair",
			dataType: "jsonp",
			success: function(data, id){
				if (data.onair == true && show == true){
					$(current).show();
					found = true;
				} else if (data.onair == false && show == false){
					$(current).hide();
				}
				if (reverse) {
					$(current).show();
				}
			}
		});
	}
	console.log("f445")
});

