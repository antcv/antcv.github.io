//capture scroll any percentage
$(window).scroll(function(){
var wintop = $(window).scrollTop(), docheight =

    $(document).height(), winheight = $(window).height();
 			var scrolled = (wintop/(docheight-winheight))*100;

  		$('.scroll-line').css('width', (scrolled + '%'));
});

var _el= $(".title");

_el.click(function(){

  if (_el.hasClass("clicked")) {
  	$(this).removeClass("clicked");
  	$(this).parent("header").removeClass("clicked");
  } else {
  	$(this).addClass("clicked");
  	$(this).parent("header").addClass("clicked");
  }

});
