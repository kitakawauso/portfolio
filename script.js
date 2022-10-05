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

// global navigation
$(".open-btn").click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
  $("#global-nav").toggleClass("panel-active"); //ナビゲーションにpanel-activeクラスを付与
});

$("#global-nav a").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".open-btn").removeClass("active"); //ボタンの activeクラスを除去し
  $("#global-nav").removeClass("panel-active"); //ナビゲーションのpanel-activeクラスも除去
});

// slider
$(function () {
  $(".slider-ui").slick({
    arrows: true,
    dots: true,
  });
});
