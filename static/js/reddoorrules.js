$(document).ready(function() {
    var pos = $('#slide-0').position();
    scroll(pos.left,pos.top);
    
    $('.splash-position, .full-list, .partial-list').click( function() {
        var windowWidth = $(window).width();
        var clickNumber = parseInt($(this).attr('number'), 10) + 1;
        var divWidth = windowWidth * 0.7;
        var divMargin = windowWidth * 0.2;
        if(clickNumber == 2) {
            $('body').css('overflow-y', 'hidden');
        } else if(clickNumber == 15) {
            clickNumber = 1;
        } 

        var $nextSlide = $('#slide-' + clickNumber);
        var pos = $nextSlide.offset();
        var divHeight = $nextSlide.height(); 
        var leftPos = pos.left - divMargin;
        var topPos = pos.top - divHeight;
            $nextSlide.width(divWidth);

        $('body').animate({
            scrollLeft: leftPos + 'px', 
            scrollTop: topPos +'px'
        }, 1000, function() { 
        });
        if($nextSlide.hasClass('full-list')) {
            $('body').css('overflow-y', 'scroll');
        }
        //$(this).removeClass('in-focus');
        //$($nextSlide).addClass('in-focus');
        $(this).css('visibility', 'hidden');
        $nextSlide.css('visibility', 'visible');
        //scroll(pos.left,pos.top);
    });
    
});
