$(document).ready(function(){
	// при выборе страны United States, показывает еще селект с выбором штата
	var selectStates = $(".states");
	var selectState = $(".state")
	selectStates.hide();

	// также селект States,должен быть обязательным
	$('.country').change(function(){
		if ($(this).val() == "US"){
			selectStates.show();
			selectState.prop('required',true);
		} else {
			selectStates.hide();
			selectState.prop('required',false);
		}
	});
});