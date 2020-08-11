var btn = $('#backTop');

$(window).on("load",function(){
    setTimeout(function() {
      $(".loader-wrapper").fadeOut("slow");
      $(' html, body').css({overflow: 'auto'});
    }, 2800);
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    console.log('yes');
    $('#backTop').addClass('show');
  } else {
    $('#backTop').removeClass('show');
    console.log('no');
  }
});

$(document).ready(function(){
  $("#backTop").click(function(e){
    console.log('clicked');
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
});

$(window).scroll(function () {
	$(".slideanim").each(function () {
		var pos = $(this).offset().top;
		var winTop = $(window).scrollTop();
		if (pos < winTop + 600) {
			$(this).addClass("slide");
		}
	});
});
