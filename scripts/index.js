$(document).ready(function() {
    var items = $('#menu li').click(function() {
        var index = items.index(this);
        $('html, body').animate({
            'scrollTop': index * $(window).height()
        }, 700);
    });
});