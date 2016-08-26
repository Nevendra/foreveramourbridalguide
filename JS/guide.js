$(document).ready(function(){
	
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
	

});