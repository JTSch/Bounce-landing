//menu items click 
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
$("[class*='arrow-up']").click(function() {
	$('html, body').animate({
		scrollTop: 0
	    }, 200);
});

$(window).resize(function() {
	var w = $(".video").width();	
	$('iframe').width(w);
	$('iframe').height(w/1.777);
}); 


