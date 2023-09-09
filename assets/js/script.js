$(document).ready(function () {
    $(".hamburger, .backdrop").click(function () {
      $(".hamburger").toggleClass("is-active");
    });
  });
  /* hamburger */
  $(".hamburger, .backdrop").click(function () {
    $(".nav_bar").toggleClass("navbar_show");
    $(".backdrop ").toggleClass("backdrop-show");
  });
  // 	mobile sub-menu toggle
  if (window.matchMedia('(max-width: 1199px)').matches) {
    $('.sub-link').click(function () {
      $(this).find('.sub-menu').slideToggle();
      $(this).siblings().find('.sub-menu').slideUp();
      $(this).closest('.sub-link').toggleClass("show");
      $(this).closest('.sub-link').siblings().removeClass("show");
    });
  }
  /* multiple gallery render */
  $('.open-album').click(function (e) {
    var el, id = $(this).data('open-id');
    if (id) {
      el = $('.image-show[rel=' + id + ']:eq(0)');
      e.preventDefault();
      el.click();
    }
  });
  /* FORM DESIGN */
  $(".form-child input").on("focusin", function () {
    $(this).parent().find("label.form-child-label").addClass("active");
  });
  
  $(" .form-child input").on("focusout", function () {
    if (!this.value) {
      $(this).parent().find("label.form-child-label").removeClass("active");
    }
  });
  
  /* show password */
  $(".form-child span.pass-icon").click(function () {
    let input = $(this).prev();
    $(this).toggleClass("show-pass-icon");
    if (input.attr('type') === "password") {
      input.attr('type', "text");
    } else {
      input.attr('type', "password");
    }
  });
  
  $('a.open-album').click(function () {
    setTimeout(function () {
      $('div.fancybox-inner').append('<div id="gr-heading" class="border pad"></div>');
    }, 700);
    setTimeout(() => {
      var my_tar = $(this).parent().siblings('.item__details')[0].innerHTML;
      my_tar = $('#gr-heading').html(my_tar);
    }, 1300)
  })