$(function () {
    $('.navbar-brand').click(function () {
        $('nav').toggleClass('fixed-top').toggleClass('fixed-bottom')
    });
});