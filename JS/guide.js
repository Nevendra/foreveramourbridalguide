$(document).ready(function(){

	var windowWidth = $(window).width();
////////////////// navagation/////////	
	function toggleNav() {
		$('nav').slideToggle()
	};

	$('.hamburgerMenuIcon').click(toggleNav);


	$('.downArrowIcon').click(function(){
        $(this).parent().parent().children('.dropdown').slideToggle();
        console.log($(this).parent().parent().children('.dropdown'));
    });

	$('input').on('click',function () {
			var box = $(this).parent().parent().parent().parent();
			if($(this).hasClass('slideBox')){
				$(box.find('.slide')).slideToggle("slow", showImgGallery(box));
				$(this).attr('disabled', true)
			} else if ($(this).hasClass('flipBox')){
				box.find('.card').addClass('flipped')
			}
	    });

	function showImgGallery(box) {
		console.log("hey")
		$(box.find('.imgDisplay')).fadeIn(3000);
	}

///////// gallery ////////////

	$(".thumbnail").click(function(){
		var thumb = $(this).parent().parent().parent()
		$(thumb.find('.bigImg').children()).attr("src", $(this).attr("src"));
		console.log($(this).attr("src"));
	});

/////////// guide step ///////////
	function guideStep() {
		var stepCounter = 0;
		var steps = $(".contentContainer .guideSteps")
		var currentStep = steps.eq(stepCounter);
		var currentInput = currentStep.find('input[type="checkbox"]')

		steps.hide();
		steps.eq(stepCounter).show();

		$('.nextStep').click(function(){
			$("body").css("overflow-y", "hidden");
			function transitionToNextStep(){
				steps.eq(stepCounter).hide();
				stepCounter = stepCounter + 1;
				steps.eq(stepCounter).show();
				currentStep = steps.eq(stepCounter);
				currentInput = currentStep.find('input[type="checkbox"]')
				$("body").css("overflow-y", "auto");
			}

			////////// transition animation//////

				$(".transitionAnimation").css("display", "block");
					function fades(){
						$(".animationImage").fadeIn(2000, function(){
							$(".animationImage").fadeOut(3000, function(){
								transitionToNextStep();
								$('.animationLeft').animate({left: "-50%"}, 500);
								$('.animationRight').animate({right: "-50%"}, 500);
								$(".transitionAnimation").stop().fadeOut(1000);
							});/////// end of fade out
						});/////end of fadeIn
					}//// end of fades
					$('.animationRight').animate({right: "0px"}, 500);
					$('.animationLeft').animate({left: "0px"}, 500, fades);

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