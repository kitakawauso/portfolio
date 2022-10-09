// fadeout
$(window).on("load", function () {
  $("body").removeClass("fadeout");
});

$(function () {
  $('a:not([href^="#"]):not([target])').on("click", function (e) {
    e.preventDefault();
    url = $(this).attr("href");
    if (url !== "") {
      $("body").addClass("fadeout");
      setTimeout(function () {
        window.location = url;
      }, 800);
    }
    return false;
  });
});

// scroll animation
$(function () {
  $('a[href^="#"]').click(function () {
    var time = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html,body").animate({ scrollTop: position }, time, "swing");
    return false;
  });
});

// div fade-in
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".section").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
  });
});

// left navigation
$(function () {
  $(window).on("load scroll resize", function () {
    var st = $(window).scrollTop();
    var wh = $(window).height();

    $(".sec-scroll-point").each(function (i) {
      var tg = $(this).offset().top;
      var id = $(this).attr("id");

      if (st > tg - wh + wh / 2) {
        $(".left-link").removeClass("is-active");
        var link = $(".left-link[href *= " + id + "]");
        $(link).addClass("is-active");
      }
    });
  });
});

// global navigation
$(".open-btn").click(function () {
  $(this).toggleClass("active");
  $("#global-nav").toggleClass("panel-active");
});

$("#global-nav a").click(function () {
  $(".open-btn").removeClass("active");
  $("#global-nav").removeClass("panel-active");
});

$("#global-nav").click(function () {
  $(".open-btn").removeClass("active");
  $("#global-nav").removeClass("panel-active");
});

// modal
$(function () {
  $(".section .modal-img").click(function () {
    var imgSrc = $(this).children().attr("src");
    $(".bigimg").children().attr("src", imgSrc);
    $(".modal").fadeIn();
    $("body,html").css("overflow-y", "hidden");
    return false;
  });

  $(".modal-close").click(function () {
    $(".modal").fadeOut();
    $("body,html").css("overflow-y", "visible");
    return false;
  });
});

// slider
$(function () {
  $(".slider-ul").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    dots: true,
    arrows: false,
    infinite: true,
    pauseOnHover: false,
  });
});
