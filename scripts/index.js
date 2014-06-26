$(window).bind('load', function() {
    $(window).resize();

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

    if ($(window).width() > 1024) {
        bindHandler();
    }

    $(window).resize(function() {
        textSize($(this));
        if ($(window).width() > 1024) {
            bindHandler();
        } else {
            unbindHandler();
        }
    });


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

function bindHandler()
{
    $('.application .content').css('display', 'none');
    $('.application .wrapper').hover(
        function() {
            $('.content', this).stop().slideDown();
        },
        function() {
            $('.content', this).stop().slideUp();
        }
    );

}

function unbindHandler()
{
    $('.application .content').css('display', 'block');
    $('.application .wrapper').unbind();
}