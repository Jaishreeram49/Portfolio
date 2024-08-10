$(document).ready(function(){
    var typed = new Typed('#typed-text', {
      strings: ['Somak Mahapatra', 'a Web Developer', 'a MERN Stack Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
  });
  
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
        $('body').toggleClass('menu-open');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('togle');
    });
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      var target = $(this.hash);
      $('html, body').animate({
          scrollTop: target.offset().top
      }, 800);
  });
  $(window).scroll(function() {
    $('section').each(function() {
        if ($(window).scrollTop() + $(window).height() > $(this).offset().top + 100) {
            $(this).addClass('fade-in');
        }
    });
  });
  $('.skill-bar').each(function() {
    $(this).find('.bar').animate({
        width: $(this).attr('data-percent')
    }, 2000);
  });
  
  });
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        // Prevent the form from submitting normally
        event.preventDefault();
        
        // Show an alert (you can customize this alert message)
        alert('Thank you for your message! We will get back to you soon.');
        
        // Refresh the page after 2 seconds
        setTimeout(function() {
            location.reload();
        }, 2000);
    });
});  
