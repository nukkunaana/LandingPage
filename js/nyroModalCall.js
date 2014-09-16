
$(function() {
	$('.nyroModal').nyroModal();

	// При отправке формы закрывает модульное окно
	$("#registerForm").submit(function(e){
		e.preventDefault();
		if ($(".ui-state-error").length > 0){
			alert("Please, fill out the form!");
		} else{
			$.nmTop().close(); //закрывает модульное окно
			alert("You did it! Thank you for choosing us.");
		}
	})
});
