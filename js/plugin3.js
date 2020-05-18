$('document').ready(function() {
    let mobile_nav_btn = $('#mobile-nav-btn');
    let win = $(window);
    let nav = $('body nav');
    let main_nav = $('#main-navbar');
    let nav_control = $('#navbar-control');
    mobile_nav_btn.click(function() {
        main_nav.slideToggle('slow');
    });
    win.scroll(function() {
        if (win.scrollTop() >= 96) {
            nav_control.addClass('fixed-top')
        } else {
            nav_control.removeClass('fixed-top')
        }
    });
});
window.onscroll = function() {

};