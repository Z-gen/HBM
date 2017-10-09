$(".toggle_mnu").click(function() {
  $(".sandwich").toggleClass("active");  
  $(".hide_mob_menu").toggleClass("visible_menu");
});

$('#up_scroll').click(function() {
  $('html, body').animate({scrollTop: 0},500);
  return false;
})

$(".btn_hide_calc").click(function(){
  $(".investors_value").toggleClass("hide_calc");
});

$(document).ready(function(){
  $('.news_home_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  });
});

$("#first_address").hover(
  function(){
    $("#first_company_dot").addClass("scale_it");
  },
  function(){
    $("#first_company_dot").removeClass("scale_it");
  }
);
$("#second_address").hover(
  function(){
    $("#second_company_dot").addClass("scale_it");
  },
  function(){
    $("#second_company_dot").removeClass("scale_it");
  }
);
$("#third_address").hover(
  function(){
    $("#third_company_dot").addClass("scale_it");
  },
  function(){
    $("#third_company_dot").removeClass("scale_it");
  }
);
$("#fourth_address").hover(
  function(){
    $("#fourth_company_dot").addClass("scale_it");
  },
  function(){
    $("#fourth_company_dot").removeClass("scale_it");
  }
);
$("#fifth_address").hover(
  function(){
    $("#fifth_company_dot").addClass("scale_it");
  },
  function(){
    $("#fifth_company_dot").removeClass("scale_it");
  }
);
$("#sixth_address").hover(
  function(){
    $("#sixth_company_dot").addClass("scale_it");
  },
  function(){
    $("#sixth_company_dot").removeClass("scale_it");
  }
);



$("#user_level").click(function(){
  $(".investors_list_item").removeClass("active_this");
  $(this).addClass("active_this");
  $(".partner_level_item").removeClass("active_level");
  $("#user_level_item").addClass("active_level");
});

$("#investor_level").click(function(){
  $(".investors_list_item").removeClass("active_this");
  $(this).addClass("active_this");
  $(".partner_level_item").removeClass("active_level");
  $("#investor_level_item").addClass("active_level");
});
$("#lider_level").click(function(){
  $(".investors_list_item").removeClass("active_this");
  $(this).addClass("active_this");
  $(".partner_level_item").removeClass("active_level");
  $("#lider_level_item").addClass("active_level");
});

$("#top_lider_level").click(function(){
  $(".investors_list_item").removeClass("active_this");
  $(this).addClass("active_this");
  $(".partner_level_item").removeClass("active_level");
  $("#toplider_level_item").addClass("active_level");
});

$("#primer_level").click(function(){
  $(".investors_list_item").removeClass("active_this");
  $(this).addClass("active_this");
  $(".partner_level_item").removeClass("active_level");
  $("#primer_level_item").addClass("active_level");
});