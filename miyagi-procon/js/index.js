$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(' .gloval-navi').addClass('active');
        } else {
            $(' .gloval-navi').removeClass('active');
        }
    });
});