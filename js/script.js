$(window).scroll(function() {
	if ($(document).scrollTop() > ($(window).height()/2)) {
	    $('.navbar').addClass('bg-dark');
	  } else {
	    $('.navbar').removeClass('bg-dark');
	  }
});