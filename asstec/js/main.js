$(document).ready(function () {
  //header js//
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".header").addClass("fixedMenu");
        } else {
            $(".header").removeClass("fixedMenu");
        }
    });
    
    
  // counting ja //
    jQuery(document).ready(function($) {
        $('.counting').counterUp({
            delay: 10,
            time: 1000
        });
    });

    
  
  // up icon js //
    $('.up_icon a[href^="#"').on('click', function (event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 2000);
      }
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 70) {
            $(".up_icon").addClass("up_iconFixd");
        }
        else {
            $(".up_icon").removeClass("up_iconFixd");
        }
    });

    // slider js// 
    $('.main_slieda_ttstmonials').slick({
        autoplay: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              dots: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              dots: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots: false,
            }
          }
        ]
    });
    
  $('.sssyour-class').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      }
    ]
  });
  //===============instgam==========//
  $('.slider_main').slick({
    arrows: false,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      }
    ]
  });
//=====================countundoen ========//
 
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let birthday = "Sep 30, 2021 00:00:00",
  countDown = new Date(birthday).getTime(),
  x = setInterval(function() {    

    let now = new Date().getTime(),
        distance = countDown - now;

    document.getElementById("days").innerText = Math.floor(distance / (day)),
      document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

    //do something later when date is reached
    if (distance < 0) {
      let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

      headline.innerText = "It's my birthday!";
      countdown.style.display = "none";
      content.style.display = "block";

      clearInterval(x);
    }
    //seconds
  }, 0)

});