$(function(){


	$(".intro").slick({
		dots: true,
		arrows: false
	})

	$(".news-button").click(function(){
		$(".news-wrap__item").removeClass("hidden")
		$(this).hide()
		return false
	})

	$("header").removeClass("fixed");
	var introHeight = $(".intro").height()
	$(window).scroll(function(){
		if ($(this).scrollTop() > introHeight) {
		$("header").addClass("fixed");
		} else {
		$("header").removeClass("fixed");
		};
	});

});








