/*
Author : Arfaoui Hamouda
Version : 0.1
 */
$(document).ready(function(){

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

})