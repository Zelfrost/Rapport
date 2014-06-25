$(document).ready(function() {
    $('.page').each(function() {
        $('#menu ul').append('<li></li>');
    });

    $('.corps img').each(function() {
        if ($(this).width() < $(this).parent().width()) {
            $(this).css('margin-top', ($(this).parent().height()-$(this).height())/2);
        } else {
            $(this).css({'height':'100%', 'width':'auto'});
        }
    });

    var items = $('#menu li').click(function() {
        var index = items.index(this);
        $('html, body').animate({
            'scrollTop': index * $(window).height()
        }, 700);
    });

    $('.application').hover(
        function() {
            $('.content', this).stop().slideDown();
        },
        function() {
            $('.content', this).stop().slideUp();
        }
    );
});