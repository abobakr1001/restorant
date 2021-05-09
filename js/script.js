$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".navbar-toggler")
  });

  // $('.nav-item a, .header-link, #back-to-top').click(function (link) {
  //     link.preventDefault();
  //     let target = $(this).attr('href');
  //     $('html, body').stop().animate({
  //       scrollTop: $(target).offset().top - 25
  //     }, 3000);

  //   })

  $("#back-to-top, .header-link , .nav-item a").click(function (link) {
    link.preventDefault();
    let target = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top - 20,
        },
        3000
      );
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 718) {
      $(".navbar").addClass("navbar-background");
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("navbar-background");
      $(".navbar").removeClass("fixed-top");
    }
  });

  $(window).scroll(function () {
    let beko = $(this).scrollTop();
    if (beko >= 718) {
      $("#back-to-top").addClass("scrollTop");
    } else {
      $("#back-to-top").removeClass("scrollTop");
    }
  });

  // $("#header, .info").ripples({
  //     dropRadius: 25,
  //     perturbance: 0.6,

  //   });

  $(".parent-container").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true,
    },
    // other options
  });
});
