// JavaScript Document
//toggle function same class
$(document).ready(function () {
    $('.to-hide-element').hide();
    $('.button-to-toggle').click(function () {
        $(this).parent().next().slideToggle(200);
    });
    $('.to-hide-element').slideUp(200);
});