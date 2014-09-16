$(document).ready(function(){
	// показывает и скрывает FAQ
	$(".see").click(function(event){
		event.preventDefault();

		var readM = $(this).data("readmore");
		var readMoreTo= $("[data-readmoreto=" + readM + "]");
		readMoreTo.slideToggle(200);
	});

	$('.hideQandA').click(function(event){
		event.preventDefault();
		var hideMore = $(this).data("hidemore");
		var readMoreTo= $("[data-readmoreto=" + hideMore + "]");
		$(readMoreTo).slideUp("slow");
	});
});