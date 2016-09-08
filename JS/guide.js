$(document).ready(function(){

	var windowWidth = $(window).width();
	
	function toggleNav() {
		$('nav').slideToggle()
	};

	$('.hamburgerMenuIcon').click(toggleNav);


	function toggleNavChildren() {
		// $(this).parent().next().next().slideToggle()
		console.log($(".dropdown"));
	};

	// $('.downArrowIcon').click(toggleNavChildren);

	$('.downArrowIcon').click(function(){
        $(this).parent().parent().children('.dropdown').slideToggle();
        console.log($(this).parent().parent().children('.dropdown'));
    });


	// function imageFlip(){
	// 	$('.flip').click(function(){
 //        if($(this).find('.card').hasClass('flipped')){
 //        	$(this).find('.card').removeClass('flipped');
 //        } else {
 //        	$(this).find('.card').addClass('flipped');
 //        }
 // 	});


	// }///end function imageFlip
	// imageFlip();
	var ckbox = $('#squaredTwo');

	$('input').on('click',function () {
			var box = $(this).parent().parent().parent();
	        if ($(this).is(':checked') && $(this).hasClass('flipBox')) {
		        if(box.find('.card').hasClass('flipped')){
		        	box.find('.card').removeClass('flipped');
		        } else {
		        	box.find('.card').addClass('flipped');
		        	$(this).attr('disabled', true)
		        }
	        }
	    });

	$('input').on('click',function () {
			var box = $(this).parent().parent().parent();
	        if ($(this).is(':checked') && $(this).hasClass('slideBox')) {
		        if(box.find('.imgGallery').hasClass('slideImg')){
		        	box.find('.imgGallery').removeClass('slideImg');
		        } else {
		        	box.find('.imgGallery').addClass('slideImg');
		        	if(box.find('.imgGallery').hasClass('slideImg')) {
		        		$(box.find('.imgGallery')).animate({height: '700px'}, 'slow')
		        		$(box.find('.slide')).animate({height: '800px'}, 'slow', showImgGallery(box));
		        	}
		        	$(this).attr('disabled', true)
		        }
	        }
	    });

	function showImgGallery(box) {
		console.log("hey")
		$(box.find('.imgDisplay')).fadeIn(3000);
	}

	$(".thumbnail").click(function(){
			var thumb = $(this).parent().parent().parent()
			$(thumb.find('.bigImg').children()).attr("src", $(this).attr("src"));
			console.log($(this).attr("src"));
		});


});