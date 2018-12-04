$( document ).ready(function() {

$(".title").on("touchstart", function () {
	$(".title").css("background-position", "-100% 0")
});
$(".title").on("touchend", function () {
	$(".title").css("background-position", "0 0")
});

});