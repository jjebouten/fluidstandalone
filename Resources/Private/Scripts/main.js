$(document).ready(function() {

	// ===========================================
	// Big target
	// ===========================================
	$('.bigTarget').on('click', function(e){
		var $link = $('a[href]:first', this);
		if ($link.length) {
			e.preventDefault();
			document.location.href = $link.prop('href');
		}
	});
	$('.bigTarget a').on('click', function(e){
		e.stopPropagation();
	});

	// ===========================================
	// Initialize flexslider
	// ===========================================
	$('.flexslider').flexslider({
		animation: "slide",
		slideshow: true,
		prevText: "",
		nextText: "",
		slideshowSpeed: 7000, //Integer: Set the speed of the slideshow cycling, in milliseconds
		animationSpeed: 600, //Integer: Set the speed of animations, in milliseconds
		randomize: true,
		controlNav: false
	});

});
