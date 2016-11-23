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

$(window).load(function(){
  	$(window).resize(function(){
		    var headerHeight = $('header.fixed').css('height');
		    $('main.flspac').css('margin-top', headerHeight);
	  });
  	$(window).resize();
});
 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
&& location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 125 //offsets for fixed header
        }, 1000);
        return false;
      }
    }
  });
  //Executed on page load with URL containing an anchor tag.
  if($(location.href.split("#")[1])) {
      var target = $('#'+location.href.split("#")[1]);

      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 400 //offset height of header here too.
        }, 1000);
        return false;
      }
    }
});

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
	});
