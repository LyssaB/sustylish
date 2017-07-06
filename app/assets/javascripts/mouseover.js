$(document).on('turbolinks:load', function(){

	$("#myCarousel").mouseenter(function() {
		$(".carousel-control", this).fadeIn("slow");
	}).mouseleave(function(){
		$(".carousel-control", this).fadeOut("slow");
	});

});