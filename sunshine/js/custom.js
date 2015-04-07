jQuery(document).ready(function() {
	// ==================================================
	// change menu on mobile version
	// ==================================================
	domready(function(){
		selectnav('mainmenu', {
			label: '',
			nested: true,
			indent: '-'
		});
	});



	// ==================================================
	// lazyload ????
	// ==================================================
	 $(function() {
          $("img").lazyload({
              effect : "fadeIn",
			  effectspeed: 900
          });
      });


	// ==================================================
	// Gallery test
	// ==================================================
	
	$(function() {
		$('#myCarousel').carousel({
		interval: 4000
		});
		
		$('#myCarouselThumbs').carousel({
		interval: 0
		});
		
		// handles the carousel thumbnails
		$('[id^=carousel-selector-]').click( function(){
		  var id_selector = $(this).attr("id");
		  var id = id_selector.replace('carousel-selector-','');
		  id = parseInt(id);
		  $('#myCarousel').carousel(id);
		  $('[id^=carousel-selector-]').removeClass('selected');
		  $(this).addClass('selected');
		  
		  $('.thumb-page').removeClass('active');
		  $(this).parents('.thumb-page').addClass('active');
		});

		// when the carousel slides, auto update
		$('#myCarousel').on('slide.bs.carousel', function (e) {
		  var id = $('.item.active.photo-item').data('slide-number');
		  id = parseInt(id)+1;
		  if($('[id^=carousel-selector-]').length <= id)
		  {
			id = 0;
		  }
		  $('[id^=carousel-selector-]').removeClass('selected');
		  $('[id=carousel-selector-'+id+']').addClass('selected');
		  
		  var currentThumbPage = $('[id=carousel-selector-'+id+']').parents('.thumb-page');
		  $('.thumb-page').removeClass('active');
		  currentThumbPage.addClass('active');
		  var currentThumbPageIndex = parseInt(currentThumbPage.data('thumb-page'));
		  $('#myCarouselThumbs').carousel(currentThumbPageIndex);
		});
	});

});
