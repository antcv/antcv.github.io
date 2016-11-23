//capture scroll any percentage
$(window).scroll(function(){
var wintop = $(window).scrollTop(), docheight =

    $(document).height(), winheight = $(window).height();
 			var scrolled = (wintop/(docheight-winheight))*100;

  		$('.scroll-line').css('width', (scrolled + '%'));
});

tinymce.init({
  selector: '.demo textarea',
  width: 754 - 2,
  height: 372 - 111,
  plugins: [
    'advlist',
    'autolink',
    'lists',
    'link',
    'image',
    'charmap',
    'print',
    'preview',
    'anchor',
    'searchreplace',
    'visualblocks',
    'code',
    'fullscreen',
    'insertdatetime',
    'media',
    'table',
    'contextmenu',
    'paste',
    'imagetools'
  ],
  toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image',
  content_css: [
    '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
    '//www.tinymce.com/css/codepen.min.css'
  ]
})
