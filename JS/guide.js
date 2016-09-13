$(document).ready(function(){

	var windowWidth = $(window).width();
	
	function toggleNav() {
		$('nav').slideToggle()
	};

	$('.hamburgerMenuIcon').click(toggleNav);


	$('.downArrowIcon').click(function(){
        $(this).parent().parent().children('.dropdown').slideToggle();
        console.log($(this).parent().parent().children('.dropdown'));
    });


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
		        		$(box.find('.imgDisplay')).slideToggle();
		        	}
		        	$(this).attr('disabled', true)
		        }
	        }
	    });

	function showImgGallery(box) {
		$(box.find('.imgDisplay')).fadeIn(3000);
	}

	$(".thumbnail").click(function(){
			var thumb = $(this).parent().parent().parent()
			$(thumb.find('.bigImg').children()).attr("src", $(this).attr("src"));
		});

	function guideStep() {
		var stepCounter = 0;
		var steps = $(".contentContainer .guideSteps")
		var currentStep = steps.eq(stepCounter);
		var currentInput = currentStep.find('input[type="checkbox"]')

		steps.hide();
		steps.eq(stepCounter).show();

		// var all_checkboxes = $(currentStep + 'input[type="checkbox"]');

		// if (currentInput.length === currentInput.filter(":checked").length) {
		//   alert('they are all checked');
		// }

		steps.css("background-color", "blue")

		$('.nextStep').click(function(){
			steps.eq(stepCounter).hide();
			stepCounter = stepCounter + 1;
			steps.eq(stepCounter).show();
			currentStep = steps.eq(stepCounter);
			currentInput = currentStep.find('input[type="checkbox"]')
			console.log(currentStep);
			console.log(currentInput);
			console.log(stepCounter);
			if(stepCounter % 2 === 0) {
			steps.css("background-color", "blue")
			} else {
				steps.css("background-color", "green");
			}

		})

		$('input').on('click', function(){
				currentInput.change(function(){
			    if(currentInput.length == currentInput.filter(":checked").length){
			       var allchecked = currentStep.find('.allChecked');
			       console.log(allchecked);
			   		allchecked.css("display", "block");
			    }
			});
		});

	}
	 guideStep();


});