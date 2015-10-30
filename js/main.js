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

$(document).ready(function() {
	$('#work img').hover(function() {
		$(this).toggleClass('shake')
	})
})

$(document).ready(function() {
	$('#work a').hover(function() {
		$(this).next().toggleClass('hidden1')
	})
})