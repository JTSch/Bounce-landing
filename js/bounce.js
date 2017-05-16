$('.navbar .nav > li > a').click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
});

$(".feature").hover(
  function() {
    $(this).addClass("hover");
  }, function() {
    $(this).removeClass("hover");
  }
);
$(".glyphicon-arrow-up").click(function() {
	$('html, body').animate({
		scrollTop: 0
	    }, 200);
});

if ($(window).width() < 768) {
	$(".navbar-nav").addClass("collapse");
};
if ($(window).width() >= 768) {
	$(".navbar-nav").removeClass("collapse");
};


$(window).resize(function() {
	var w = $(".video").width();	
	$('iframe').width(w);
	$('iframe').height(w/1.78);
}); 


