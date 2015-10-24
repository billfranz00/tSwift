//T-Swift Bubble Burst//

$(document).ready(function() {
	$('#dragon').draggable()
	$('#dragon').dblclick(function() {
		$('#dragon').effect('explode')
	})
})

$(document).ready(function () {
    // SCROLL SCRIPTS 
        $('.scroll-me a').bind('click', function (event) { //just pass scroll-me class and start scrolling
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutQuad');
        event.preventDefault();
    });
});

// Popular Songs //

$(document).ready(function () {
	$('#a1').mouseenter(function () {
		$('#a1').removeClass('shake')
		$('#a1').addClass('shake1')
		$('#h1').effect('bounce', {times: 8}, 1500)
	})
	$('#a1').mouseleave(function () {
		$('#a1').removeClass('shake1')
		$('#a1').addClass('shake')
	})
	$('#a2').mouseenter(function () {
		$('#a2').removeClass('shake')
		$('#a2').addClass('shake1')
		$('#h2').effect('bounce', {times: 8}, 1500)
	})
	$('#a2').mouseleave(function () {
		$('#a2').removeClass('shake1')
		$('#a2').addClass('shake')
	})
	$('#a3').mouseenter(function () {
		$('#a3').removeClass('shake')
		$('#a3').addClass('shake1')
		$('#h3').effect('bounce', {times: 8}, 1500)
	})
	$('#a3').mouseleave(function () {
		$('#a3').removeClass('shake1')
		$('#a3').addClass('shake')
	})
	$('#a4').mouseenter(function () {
		$('#a4').removeClass('shake')
		$('#a4').addClass('shake1')
		$('#h4').effect('bounce', {times: 8}, 1500)
	})
	$('#a4').mouseleave(function () {
		$('#a4').removeClass('shake1')
		$('#a4').addClass('shake')
	})
	$('#a5').mouseenter(function () {
		$('#a5').removeClass('shake')
		$('#a5').addClass('shake1')
		$('#h5').effect('bounce', {times: 8}, 1500)
	})
	$('#a5').mouseleave(function () {
		$('#a5').removeClass('shake1')
		$('#a5').addClass('shake')
	})
	$('#a6').mouseenter(function () {
		$('#a6').removeClass('shake')
		$('#a6').addClass('shake1')
		$('#h6').effect('bounce', {times: 8}, 1500)
	})
	$('#a6').mouseleave(function () {
		$('#a6').removeClass('shake1')
		$('#a6').addClass('shake')
	})
})