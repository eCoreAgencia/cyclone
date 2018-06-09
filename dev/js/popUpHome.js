$(document).ready(function() {
	if(!$.cookie('popUpDesc15')) {
		$('body').removeClass('modal-active');
	}

	$('.close-modal').click(function() {
		$('body').removeClass('modal-active');
		$.cookie('popUpDesc15', 1);
		return false;
	});
});
