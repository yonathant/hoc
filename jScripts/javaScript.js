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
  
    $(".focus").focus(function() {
        $(".all-games-list").addClass("focused");
    });
    $("#logo a, .nav-ul>li:nth-child(3) a").focus(function() {
        $(".all-games-list").removeClass("focused");
    });
    $(".focus").mouseleave(function() {
        $(".all-games-list").removeClass("focused");
    });
    

});
