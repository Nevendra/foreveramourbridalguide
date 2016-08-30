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


	function imageFlip(){
		$('.flip').click(function(){
        if($(this).find('.card').hasClass('flipped')){
        	$(this).find('.card').removeClass('flipped');
        } else {
        	$(this).find('.card').addClass('flipped');
        }
 	});


	}///end function imageFlip
	imageFlip();
	

});