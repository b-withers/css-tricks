$( document ).ready(function() {


	// TOUCHSCREEN AND MOBILE PHONE SUPPORT FOR HIGHLIGHT
$(".title").on("touchstart", function () {
	$(".title").css("background-position", "-100% 0");
});
$(".title").on("touchend", function () {
	$(".title").css("background-position", "0 0");
});
//END OF TOUCHSCREEN AND MOBILE PHONE SUPPORT


});