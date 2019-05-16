$(document).ready(function () {


	// TOUCHSCREEN AND MOBILE PHONE SUPPORT FOR HIGHLIGHT
	$(".title").on("touchstart", function () {
		$(".title").css("background-position", "-100% 0");
	});
	$(".title").on("touchend", function () {
		$(".title").css("background-position", "0 0");
	});
	//END OF TOUCHSCREEN AND MOBILE PHONE SUPPORT

	//start of script to capture and use the URL to change the body color
	var urlParams = new URLSearchParams(window.location.search);
	console.log(urlParams.has('red'));
	if (urlParams.has('red')) {
		console.log('red is working');
		$('body').css('background', 'red');
	};
	//end of script to capture and use the URL to change the body color

});