/*
Author : Arfaoui Hamouda
Version : 0.1
 */
$(document).ready(function(){
    "use strict";
    // Trigger MixitUp
    var mixer = mixitup('#plugin');
    // Adjust Shuffle Links
    $(".menu li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    });

    // Trigger magnific-popup
    $('#projects .item').magnificPopup({
        type: 'image'
        // other options
    });

    // Trigger WOW.JS
    new WOW().init();

    // Nice Scroll
    $("html").niceScroll({
        cursorcolor: "#25365d", // change cursor color in hex
        cursorwidth: "8px", // cursor width in pixel (you can also write "5px")
        cursorborder: "none", // css definition for cursor border
        cursorborderradius: "0px", // border radius in pixel for cursor
    });

    //SmoothSCroll
    var scroll = new SmoothScroll('a[href*="#"]',{
        // Speed & Easing
        speed: 1300, // Integer. How fast to complete the scroll in milliseconds
        offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
        easing: 'easeOutQuart', // Easing pattern to use
    });

    // Caching The Scroll Top Element
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            $("#scroll").show();
        } else {
            $("#scroll").hide();
        }
    });

})

// Loading Screen
$(window).load(function () {
    "use strict";
    // Loading Elements
    $("#loader .sk-cube-grid").fadeOut(2000, function () {
        // Show The Scroll
        $("body").css("overflow", "auto");
        $("body").css("overflow-x", "hidden");
        $(this).parent().fadeOut(2000, function () {
            $(this).remove();
        });
    });
});