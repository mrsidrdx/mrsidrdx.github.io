var btn = $('#backTop');
var new_id = '';

$(document).ready(function(){
  $('.nav-link').click(function() {
      var id = $(this).attr('id');
      console.log(id);
      window.sessionStorage.setItem("new_id", "#" + id);
  });
});

$(window).on("load",function(){
    setTimeout(function() {
      // $('.loader-wrapper').css({display: 'none'});
      $(".loader-wrapper").fadeOut("slow");
      new_id = window.sessionStorage.getItem("new_id");
      console.log(new_id);
      $(new_id).css({color: '#f00'});
      $('html, body').css({overflow: 'auto'});
    }, 1600);
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
