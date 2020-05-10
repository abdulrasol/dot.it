/* global $, window */
/* jshint esversion: 6 */
$('document').ready(function () {
    'use strict';
    $('nav .uk-list li').click(function(event) {
        /* Act on the event */
        var id = $(this).data('id');
        var sr = $('#'+id).offset().top;
        //console.log($(this).text());
        if ($(this).text() === 'Home') {
            $('html').animate({scrollTop: 0}, 400);
        } else {
            $('html').animate({scrollTop: (sr - 25)}, 400);
        }
        if ($(window).width() <= 800){
            $('nav .list-container').slideToggle('slow');
        }
        $(this).addClass('active').siblings().removeClass('active');
        
    });

    //
    let move_to_skill = $('#move-to-skills');
    let skills = $('#skills');
    move_to_skill.on('click', event => {
        $('html').animate({scrollTop: (skills.offset().top - 85)}, 400);
    });

    // nice scroll plugin
    /*
    $("body").niceScroll({
        cursorcolor:"#1e87f07c",
        cursorwidth:"5px"
    });
    */
});
let mobile_nav_btn = document.getElementById("mobile-nav-btn");
mobile_nav_btn.addEventListener('click', event => {
    $('nav .list-container').slideToggle('slow');
});

// When the user scrolls the page, execute myFunction
var main_navbar = $("#main-navbar");
window.onscroll = function() {
    var height = $(window).scrollTop(),
    width = $(window).width();
    if (height > 151){
        main_navbar.css({
            "position": "fixed",
            'left': '0px',
        });
    }
    else{
     main_navbar.css({
        "position": "relative"
    });
 }
 let sr =$(window).scrollTop()
 let skill_bar = $('.about-me .skills').offset().top
 if (sr > (skill_bar-450)) {
    //$('.about-me .skills .skill:nth-child(1) .skill-bar span').animate({'width': '90%'}, 400)
};

};

