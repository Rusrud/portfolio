

// Fixed header

$(window).scroll(function() {
	if ($(this).scrollTop() > 30) {
		$("header").addClass("headhesive--stick");
	}
	
	else{
		$("header").removeClass("headhesive--stick");
	}
});

// Toggle menu

$(document).ready(function() {
	$(".toggle-menu").click( function() {
		$(this).toggleClass("on");
		$(".user-icon").removeClass("on-user-icon");
		$(".dropdown-menu-user").hide();
		$(".dropdown-menu").slideToggle();
			return false;
	});
});


// Clicks - hides

$(".btn-signin").on("click", function(e) {
	$(".dropdown-menu-user").hide();
	$(".user-icon").removeClass("on-user-icon");
});

$(document).on("click", function(e) {
	if (!$(e.target).closest("#menu-wrapper").length) {
		$(".dropdown-menu-user").fadeOut();
		$(".user-icon").removeClass("on-user-icon");
	}

	e.stopPropagation();
});

$(document).on("click", function(e) {
	if (!$(e.target).closest("#menu-wrapper").length) {
		$(".dropdown-menu").fadeOut();
		$(".toggle-menu").removeClass("on");
	}

	e.stopPropagation();
});

// Icon scroll

$(document).ready(function() {
	$(".icon-scroll").on("click","a", function (event) {
		event.preventDefault();
		
		var id = $(this).attr("href"),
				top = $(id).offset().top;

	$("body, html").animate({scrollTop: top}, 1500);
	});
});


$(document).ready(function() {
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		
		var id = $(this).attr("href"),
				top = $(id).offset().top;

	$("body, html").animate({scrollTop: top}, 1500);
	});
});
