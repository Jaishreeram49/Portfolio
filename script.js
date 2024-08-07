$(document).ready(function() {
    var typed = new Typed('#typed-text', {
        strings: ['Somak Mahapatra', 'a Web Developer', 'a MERN Stack Developer'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
    // Toggle menu and header
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
        $('body').toggleClass('menu-open');
    });

    // Close menu on scroll or load
    $(window).on('scroll load', function() {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
        $('body').removeClass('menu-open');
    });

    // Smooth scroll for navigation links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800);
    });

    // Add fade-in effect to sections
    $(window).scroll(function() {
        $('section').each(function() {
            if ($(window).scrollTop() + $(window).height() > $(this).offset().top + 100) {
                $(this).addClass('fade-in');
            }
        });
    });

    // Skill bar animation
    $('.skill-bar').each(function() {
        $(this).find('.bar').animate({
            width: $(this).attr('data-percent')
        }, 2000);
    });

});
