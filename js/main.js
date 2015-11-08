(function(){
	'use-strict'
	$nav = $('#project-nav-scroll-top').hide();
	$(window).scroll(function() {
		$wScroll = $(this).scrollTop();
		console.log("hight:"+$(window).height());
		console.log("scroll:"+$wScroll);
		if ($wScroll < 100) {
			$nav.fadeOut();
		} else {
			$nav.fadeIn();

		}
	});

	$nav.click(function(){
		$('html,body').animate({scrollTop:0},300);
		return false;
	});
})();