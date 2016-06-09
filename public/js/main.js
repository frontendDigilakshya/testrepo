$(document).ready(function() {
$("#scrollToform").click(function() {

		$('html, body').animate({
			scrollTop: $("#form-section").offset().top
		}, 1000);
	});
});