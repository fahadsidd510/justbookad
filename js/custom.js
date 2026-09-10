/* -------------------------------	
		 LOADER JS START
/* ----------------------------- */
 $(window).on('load', function() {
     $(".loader").fadeOut("slow");;
});

/* -------------------------------  
        SILDER UPDATES
/* ----------------------------- */

$("#heroo").owlCarousel({
        items: 1,
        nav: false,
        slideSpeed: 5,
        dots: false,
        autoplay: true,
        loop: false,
        animateIn: 'fadeIn',
              animateOut: 'fadeOut',
         //dots: true,
        navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
        mouseDrag: true,
        touchDrag: true
    });
   

// content-1
$("#content-1").mCustomScrollbar({
  scrollButtons: {
    enable: false
  },
  //scrollbarPosition: "outside"
});

//success-silder
$("#success-silder, #testimonial-slider").owlCarousel({
        autoplay: true,
        items: 1, //Set Testimonial items
        loop: true,
        margin: 0,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        nav: true,
        dots: false,
        navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        667:{
            items:1,
        },
        768:{
            items:1,
        },
        1000:{
            items:1,
        }
    }   
        
    });

//blogs-slider
$("#blogs-slider").owlCarousel({
     animateOut: 'slideOutUp',
  animateIn: 'slideInUp',
        autoplay: true,
        items: 1, //Set Testimonial items
        loop: false,
        margin: 0,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        nav: false,
        dots: false,
        navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        667:{
            items:1,
        },
        768:{
            items:1,
        },
        1000:{
            items:1,
        }
    }   
        
    });

//Client Carousel
$("#client-slider").owlCarousel({
         autoplay: true,
       items: 5, //Set Testimonial items
        loop: true,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        nav: true,
        dots: false,
        navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        480:{
            items:2,
        },
        568:{
            items:3,
        },
        600:{
            items:3,
        },
        667:{
            items:4,
        },
        1000:{
            items:5,
        }
    }   
        
    });

/* -------------------------------	
		 WOW ANIMATED JS START
/* ----------------------------- */

// Elements Animation
    if($('.wow').length){
        var wow = new WOW(
          {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       false,       // trigger animations on mobile devices (default is true)
            live:         true       // act on asynchronously loaded content (default is true)
          }
        );
        wow.init();
    }
/* -------------------------------	
		INPUT PLACEHOLDER
/* ----------------------------- */

$('input,textarea').focus(function(){

   $(this).data('placeholder',$(this).attr('placeholder'))

          .attr('placeholder','');

}).blur(function(){

   $(this).attr('placeholder',$(this).data('placeholder'));

});

/* ---------------------	
		back-top
/* --------------------- */

if ($('#back-top').length) {

    var scrollTrigger = 100, // px

        backToTop = function () {

            var scrollTop = $(window).scrollTop();

            if (scrollTop > scrollTrigger) {

                $('#back-top').addClass('show');

            } else {

                $('#back-top').removeClass('show');

            }

        };

    backToTop();

    $(window).on('scroll', function () {

        backToTop();

    });

    $('#back-top').on('click', function (e) {

        e.preventDefault();

        $('html,body').animate({

            scrollTop: 0

        }, 700);

    });

}

/* ---------------------    
        STICKY NAV
/* --------------------- */

var stickyNavTop = $('#header').offset().top;
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
if (scrollTop > stickyNavTop) { 

    $('#header').addClass('sticky');

} else {

    $('#header').removeClass('sticky'); 

}

};

stickyNav();

$(window).scroll(function() {
    stickyNav();
});
