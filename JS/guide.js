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
		if(windowWidth > 768){
			$(".flipper").mouseenter(function(){
	    		$(".flip-container").toggleClass("flip")
	    		var newSource = $this.data('alt-src');
	    	})
	    	$(".flipper").mouseleave(function(){
	    		$(".flip-container").toggleClass("flip")
	    	})

		} else {
			$(".flipper").click(function(){
	    	$(".flip-container").addClass("flip");
	    	$(this).find(".toBeFlipped").attr('src', 'Images/guideBrides/happyBride.jpg')
	    	console.log($(this).find(".toBeFlipped"));
	    	})
		}
	}///end function imageFlip
	imageFlip();
	

});