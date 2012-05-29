$(document).ready(function() {
    var pos = $('#slide-0').position();
    scroll(pos.left,pos.top);
    
    $('.splash-position, .full-list, .partial-list').click( function() {
        var clickNumber = parseInt($(this).attr('number'), 10) + 1;
        if(clickNumber == 15) {
            clickNumber = 1;
        } 
        var $nextSlide = '#slide-' + clickNumber;
        var pos = $($nextSlide).position();
        $('body').animate(
            {'left': '+=' + pos.left + 'px', 'top': '+=' + pos.top +'px'}, 
        2000);
        //scroll(pos.left,pos.top);
    });
    
});
