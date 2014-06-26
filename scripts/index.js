$(window).bind('load', function() {
    $('.page').each(function() {
        $('#menu ul').append('<li></li>');
    });

    var items = $('#menu li').click(function() {
        var index = items.index(this);
        $('html, body').animate({
            'scrollTop': index * $(window).height()
        }, 700);
    });

    textSize($(this));

    $(window).resize(function() {
        textSize($(this));
    });

    $('.application .wrapper').hover(
        function() {
            $('.content', this).stop().slideDown();
        },
        function() {
            $('.content', this).stop().slideUp();
        }
    );
});

function textSize()
{
    $('.text-wrapper').each(function() {
        var p = $(this).parent().parent();
        if ($(this).height() > $(p).height()) {
            $(p).css('height', $(this).height() + 60);
        }
    });
}