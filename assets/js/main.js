// ==================================================
// * Project Name   :  Dexfolio - Portfolio & Agency Template
// * File           :  JS Base
// * Version        :  1.0.0
// * Last change    :  11 April 2022
// ==================================================

(function($) {
  "use strict";

  // scroll to next section
  $(".next_section").on("click", function(event) {
    let nextSection = $(event.target).closest("section").next("section");
    if (!nextSection) {
      return false;
    }
    $("html,body").animate({ scrollTop: nextSection.position().top }, "fast");
    return false;
  });

  // hide collapsable navbar if clicked anywhere outside the navbar
  $(document).click(function(event) {
    const $target = $(event.target);
    if ($target.hasClass("navbar-toggle")) {
      return;
    }
    const $navbar = $(".navbar-collapse");
    if (!$navbar || $navbar.hasClass("collapsed")) {
      return;
    }
    if (!$target.hasClass("nav-link") && $navbar.has($target).length > 0) {
      return;
    }
    $navbar.collapse("hide");
  });

  // Back To Top - Start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
      $('#silktide-cookie-icon:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
      $('#silktide-cookie-icon').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $(".scroll").on('click', function() {
      $("html,body").animate({ scrollTop: 0 }, "slow");
      return false
    });
  });
  // Back To Top - End
  // --------------------------------------------------

  // Sticky Header - Start
  // --------------------------------------------------
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      $('.header_section').addClass("sticky")
    } else {
      $('.header_section').removeClass("sticky")
    }
  });
  // Sticky Header - End
  // --------------------------------------------------

  // Background Color - Start
  // --------------------------------------------------
  $("[data-text-color]").each(function() {
    $(this).css("color", $(this).attr("data-text-color"))
  });
  $("[data-bg-color]").each(function() {
    $(this).css("background-color", $(this).attr("data-bg-color"))
  });
  // Background Color - End
  // --------------------------------------------------

  // Off Canvas - Start
  // --------------------------------------------------
  $(document).ready(function() {
    $('.offcanvas_close_btn, .offcanvas_overlay').on('click', function() {
      $('.offcanvas_sidebar').removeClass('active');
      $('.offcanvas_overlay').removeClass('active');
    });

    $('.offcanvas_btn').on('click', function() {
      $('.offcanvas_sidebar').addClass('active');
      $('.offcanvas_overlay').addClass('active');
    });
  });
  // Off Canvas - End
  // --------------------------------------------------

  // Parallax - Start
  // --------------------------------------------------
  $('.parallaxie').parallaxie({
    offset: 0,
    speed: 0.5,
  });
  // Parallax - End
  // --------------------------------------------------

  // Wow Js - Start
  // --------------------------------------------------
  var wow = new WOW({
    mobile: false,
  });
  wow.init();
  // Wow Js - End
  // --------------------------------------------------

})(jQuery);
