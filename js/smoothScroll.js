$(function() {
	// Плавный скролл
	$("a.scroll").click(function(e) {
		e.preventDefault();

		var dataScrollAttr = $(this).data('scroll');
		var elementToScrollTo = $("[data-scrollTo=" + dataScrollAttr + "]"); //выбор элемента к которому надо скролить
		var idOfElementToScrollTo = elementToScrollTo.attr("id");

		offsetTop = document.getElementById(idOfElementToScrollTo).offsetTop;
		console.log(offsetTop);

		$('body,html').animate({scrollTop: offsetTop}, 1200);
	});
}); 