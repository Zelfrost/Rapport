$(document).ready(function() {
    $('.page').each(function() {
        $('#menu ul').append('<li></li>');
    });

    $('.corps img').each(function() {
        var width = $(this).width();
        var height = 'auto';
        $(this).css({'width':width, 'height':height});
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