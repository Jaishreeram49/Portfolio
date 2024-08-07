
$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });

    // smooth scrolling 
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
        500, 
        'linear'
        );
    });
});

// Typing animation
var typed = new Typed(".typing", {
    strings: ["Somak Mahapatra", "Web Developer", "MERN Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
