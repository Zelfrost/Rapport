$(document).ready(function() {
    $('.page').each(function() {
        $('#menu ul').append('<li></li>');
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