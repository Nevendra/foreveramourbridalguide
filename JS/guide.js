$(document).ready(function(){
	
	function toggleNav() {
				$('nav').slideToggle()
			};

	$('.hamburgerMenu').click(toggleNav);

	function toggleNavChildren() {
				$('nav ul li ul').slideToggle()
			};

	$('.dropdown').click(toggleNav);
	

});