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
	// Gallery slider with thumbnails
	// ==================================================
	
	$(function() {
		$('#myCarousel').carousel({
		//interval: 4000
		interval:0
		});
		
		$('#myCarouselThumbs').carousel({
		interval: 0
		});
		
		selectGalleryThumb_handler();
		autoslideGalleryPhoto_handler();
		
	});
	
	// Handles the thumbnails carousel selection
	function selectGalleryThumb_handler() {
		$('[id^=carousel-selector-]').click( function(){
		  var id_selector = $(this).attr("id");
		  var id = id_selector.replace('carousel-selector-','');
		  id = parseInt(id);
		  
		  // Navigate to the selected from thumb carousel photo-item
		  $('#myCarousel').carousel(id);
		  
		  // Update the photo carousel
		  $('[id^=carousel-selector-]').removeClass('selected');
		  $(this).addClass('selected');
		  
		  // Update the thumb carousel active page
		  $('.thumb-page').removeClass('active');
		  $(this).parents('.thumb-page').addClass('active');
		});
	}
	
	// Handles the photo carousel slide event, auto update the thumb carousel
	function autoslideGalleryPhoto_handler() {
		$('#myCarousel').on('slide.bs.carousel', function (e) {
		  var photoId = $('.item.active.photo-item').data('slide-number');
		  
		  // Prepare the thumb carousel for the photo carousel auto slide
		  // Set the selected thumb ID to be the next one 
		  var id = parseInt(photoId) + 1;
		  if($('[id^=carousel-selector-]').length <= id)
		  {
			id = 0;
		  }
		  $('[id^=carousel-selector-]').removeClass('selected');
		  $('[id=carousel-selector-'+id+']').addClass('selected');
		  
		  // Set the selected thumb page and auto slide to it
		  var currentThumbPage = $('[id=carousel-selector-'+id+']').parents('.thumb-page');
		  $('.thumb-page').removeClass('active');
		  currentThumbPage.addClass('active');
		  var currentThumbPageIndex = parseInt(currentThumbPage.data('thumb-page'));
		  $('#myCarouselThumbs').carousel(currentThumbPageIndex);
		});
	}

});
