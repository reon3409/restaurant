$(".top-btn, site-title").click(()=>{
  $("html, body").animate({
    scrollTop : 0
  },500);
});
$(".concept1").click(()=>{
  const position = $('#concept').offset().top;
  $("html, body").animate({
    scrollTop : position
  },500);
});
$(".menu1").click(()=>{
  const position = $('#menu').offset().top;
  $("html, body").animate({
    scrollTop : position
  },600);
});
$(".cheff1").click(()=>{
  const position = $('#cheff').offset().top;
  $("html, body").animate({
    scrollTop : position
  },700);
});
$(".access1").click(()=>{
  const position = $('#access').offset().top;
  $("html, body").animate({
    scrollTop : position
  },800);
});
$(".reservation1").click(()=>{
  const position = $('#reservation').offset().top;
  $("html, body").animate({
    scrollTop : position
  },900);
});
$(()=>{
  $("nav").hide();
  $(".menubtn").click(()=>{
    $("nav").toggle(300);
  });
});