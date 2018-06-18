$( document ).ready(function() {
    AOS.init({ //Fade Up animation
        duration: 700,
        easing: 'ease-in-out-back',
        once: true
    });
  // Header: Sticky Navigaition

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {  
        $('#main-nav').addClass("scroll");
    }
    else {
        $('#main-nav').removeClass("scroll");
    }

    s = $(window).scrollTop();
    $('.side1, .side2, .side3, .about-side, .poker-side1, .poker-side2, .poker-side3, .rummy-side1, .rummy-side2, .taki-side2').css("-webkit-transform", "translateY(-" + (s/5) + "px)"); 

  });

  /*Quiz*/
  (function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src='https://embed.playbuzz.com/sdk.js';fjs.parentNode.insertBefore(js,fjs);}(document,'script','playbuzz-sdk'));
    /*

Smooth scrolling
*/



// $(".nav-ul li").click(function() {
// $(".nav-ul a").removeClass("active");
//   $(this).addClass("active");
//    $('html, body').animate({
//     scrollTop: $(window).scrollTop() + 100});
// return false;
// });

// $(".nav-ul li:nth-child(2), .down-arrow").click(function() {
//   $(".nav-ul a").removeClass("active");
//   $(".nav-ul li:nth-child(2) a, .down-arrow").addClass("active");
//    $('html, body').animate({
//        scrollTop:        $("#section2").offset().top+100
//    }, 300);
// return false;
// });

// $(".nav-ul li:nth-child(3)").click(function() {
//   $(".nav-ul a").removeClass("active");
//   $(".nav-ul li:nth-child(3) a").addClass("active");
//    $('html, body').animate({
//        scrollTop:        $("#section3").offset().top-70
//    }, 300);
// return false;
// });

// $(".nav-ul li:nth-child(4)").click(function() {
//   $(".nav-ul a").removeClass("active");
// $(".nav-ul li:nth-child(4) a").addClass("active");
//    $('html, body').animate({
//        scrollTop:        $("#section4").offset().top-60
//    }, 300);
// return false;
// });

});

