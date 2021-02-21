$(document).ready(function() {
    

    /* Sticky Navigation  */

    $('.js--section-features').waypoint(function(direction){
        if  (direction == "down") {
            $('nav').addClass('sticky');
        }   else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    })
    
    
    
    /*   Scroll on buttons */
    
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    }) 
    
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    })
    
    
    
    /*   Smooth Scrolling  (https://www.w3schools.com/howto/howto_css_smooth_scroll.asp)   */
    
    
     $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
    

    
    /* Animations on scroll  */
    
    
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });
     
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '50%'
    });
     
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });
     
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '50%'
    });
    
    
    
    /* Mobile navigation */
    
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('.ion-navicon-round')) {
            icon.addClass('.ion-close-round');
            icon.removeClass('.ion-navicon-round');
        } else {
            icon.addClass('.ion-navicon-round');
            icon.removeClass('.ion-close-round');
        }
        
    $(window).resize(function(){

        var nav = $('.js--main-nav');

        var icon = $('.js--nav-icon i');

        if ($(window).width() > 767){

        nav.css("display", "block");

        icon.addClass('ion-close-round');

        icon.removeClass('ion-navicon-round');

        } else {

        nav.css("display", "none");

        icon.addClass('ion-navicon-round');

        icon.removeClass('ion-close-round');

        }

        });
        
    })
    
});