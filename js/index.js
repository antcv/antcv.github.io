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

var GifLinks = (function() {

  'use strict';
  var body;
  var container;

  /* -------------------------
  /*          UTILS
  /* -------------------------*/

  // Soft object augmentation
  function extend( target, source ) {

    for ( var key in source ) {
      if ( !( key in target ) ) {
        target[ key ] = source[ key ];
      }
    }

    return target;
  }

  // Applys a dict of css properties to an element
  function applyProperties( target, properties ) {

    for( var key in properties ) {
      target.style[ key ] = properties[ key ];
    }
  }

  /* -------------------------
  /*          App
  /* -------------------------*/

  // Initialize
  function init( elements, preload ) {

    if ( elements.length ) {

      // Loop and assign
      for( var i = 0; i < elements.length; i++ ) {

        if ( preload === true ) {
          preloadAndTrack( elements[ i ] );
        } else {
          track( elements[ i ] );
        }
      }

    } else {

       if ( preload === true ) {
        preloadAndTrack( elements );
      } else {
        track( elements );
      }
    }
  }

  // Start tracking after preload
  function preloadAndTrack( element ) {

    var awesomeGif = element.getAttribute( 'data-src' );
    if ( awesomeGif ) {

      // Load the image
      var img = new Image();
      img.onload = function() {

        element.className += ' preloaded'
        track( element )
      }

      img.src = awesomeGif;
    }
  }

  // Start tracking mouse hovers
  function track( element ) {

     // "Party on Wayne" ~ "Party on Garth"
    element.addEventListener( 'mouseover',  function() { startPartying( this ); }, false );
    element.addEventListener( 'touchstart', function() { startPartying( this ); }, false);

    // Someone called the cops.
    element.addEventListener( 'mouseout',     function() { stopPartying(); }, false);
    element.addEventListener( 'touchmove',    function( event ) { event.preventDefault(); stopPartying(); }, false);
    element.addEventListener( 'click',        function() { stopPartying(); }, false);
    element.addEventListener( 'dblclick',     function() { stopPartying(); }, false);

    addClasses( element );
  }

  // Adds classes to do with giflink status (has link etc)
  function addClasses( element ) {

    element.className += ' giflink ready';

    if ( element.href ) {
      element.className += ' has-link';
    } else {
      element.className += ' no-link';
    }
  }

  // Create and cache the gif container.
  function createContainer() {

    var containerProperties = {
      'backgroundPosition': '50% 50%',
      'backgroundSize': 'cover',
      'pointerEvents': 'none',
      'position': 'fixed',
      'zIndex': '999999',
      'display': 'none',
      'height': '100%',
      'width': '100%',
      'margin': '0px',
      'left': '0px',
      'top': '0px',
    }

    container = document.createElement( 'div' );
    applyProperties( container, containerProperties );
    body.appendChild( container );
  }

  // Add the background to the container, and the container to the page!
  function startPartying( element ) {

    var awesomeGif = element.getAttribute( 'data-src' );
    if( awesomeGif ) {
      container.style[ 'backgroundImage' ] = 'url(' + awesomeGif + ')';
      container.style[ 'display' ] = 'block';
    } else {
      console.log( "Sorry, an element doesn't have a data-src!" );
    }
  }

  // Hide the container
  function stopPartying() {

    container.style[ 'display' ] = 'none';
    container.style[ 'backgroundImage' ] = '';
  }


  function main( elements, options ) {

    // Caching
    body = document.body;
    createContainer();

    var preload = false;
    if ( options && options.preload ) {
      preload = !!options.preload;
    }

    // Initialize giflinks
    init( elements, preload );
  }

  return extend( main, {

  });

})();

var elements = document.querySelectorAll( 'article a' );
GifLinks( elements );
