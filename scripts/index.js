$(window).bind('load', function() {
    var pos = new Array(
        0,
        $(window).height(),
        $(window).height()*2,
        $(window).height()*3
    );
    var curr = 0;

    if ($(window).width() > 1024) {
        $('#html').data('scroll', 'off');
    } else {
        $('#html').data('scroll', 'on');
    }

    $('.page').each(function() {
        $('#menu ul').append('<li></li>');
    });

    $('#menu li').animate({color:'#FFF'}, 600).animate({color:'#428BCA'}, 600);

    var items = $('#menu li').click(function() {
        curr = items.index(this);
        $('#html').stop().animate({
            'scrollTop': pos[curr]
        }, 700);
    });

    textSize($(this));

    if ($(window).width() > 1024) {
        bindHandler();
    }

    $(window).resize(function() {
        textSize($(this));
        if ($(window).width() > 1024 && $('#html').data('scroll') == 'on') {
            pos = new Array(
                0,
                $(window).height(),
                $(window).height()*2,
                $(window).height()*3
            );
            bindHandler();
        } else if ($(window).width() <= 1024 && $('#html').data('scroll') == 'off') {
            unbindHandler();
        } else if ($('#html').data('scroll') == 'off') {
            pos = new Array(
                0,
                $(window).height(),
                $(window).height()*2,
                $(window).height()*3
            );
        }
    });

    $('#html').scroll(function() {
        if ($('#applications hr').position().top < $(document).scrollTop() + $(window).height()) {
            $('#applications .content').slideDown(400).slideUp(400);
            setTimeout(function() {
                $('#applications .content').css({
                    'height':'auto',
                    'overflow':'visible'
                }, 850);
            }, 1000);
            $('#html').unbind();
        }
    });

    $('#info button').click(function() {
        $('#info').remove();
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

        $(document).on('keyup', function(e) {
            if (e.which == 38) {
                if (curr > 0) {
                    curr --;
                }
            } else if (e.which == 40) {
                if (curr < 4) {
                    curr ++;
                }
            }

            $('#html').stop().animate({
                'scrollTop': pos[curr]
            }, 700);
        });

        $('#html').data('scroll', 'off');
    }

    function unbindHandler()
    {
        $('.application .content').css('display', 'block');

        $('.application .wrapper').unbind();
        $(document).unbind('keyup');

        $('#html').data('scroll', 'on');
    }
});