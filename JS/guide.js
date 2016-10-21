$(document).ready(function(){

	var windowWidth = $(window).width();

	$('.unCheckAll').click(function(){
		$("input:checkbox").attr('checked', false);
		console.log($("input:checkbox"));
	})
////////////////// navagation/////////	
	function toggleNav() {
		$('nav').slideToggle()
	};

	$('.hamburgerMenuIcon').click(toggleNav);


	$('.downArrowIcon').click(function(){
        $(this).parent().parent().children('.dropdown').slideToggle();
    });

	$('input').on('click',function () {
			var box = $(this).parent().parent().parent().parent();
			if($(this).hasClass('slideBox')){
				$(box.find('.slide')).slideToggle("slow", showImgGallery(box));
				// $(this).attr('disabled', true)
			} else if ($(this).hasClass('flipBox')){
				box.find('.card').toggleClass('flipped');
				box.find('.box').toggleClass('removeBackgroundImage');

				// $(this).attr('disabled', true);
			}
	    });

	function showImgGallery(box) {
		$(box.find('.imgDisplay')).fadeIn(3000);
	}

///////// gallery ////////////

	$(".thumbnail").click(function(){
		var thumb = $(this).parent().parent().parent()
		$(thumb.find('.bigImg').children()).attr("src", $(this).attr("src"));
	});

//////// arrow ////// 
var imgCounter = 0;

$('.imgArrows').click(function(){
	var arrowThumb = $(this).parent().parent().find('.imgList img');
	var	arrowImg = $(this).parent().parent().find('.bigImg').children();
	if($(this).hasClass('backArrow')){
		// imgCounter = imgCounter - 1;
		imgCounter = (imgCounter - 1) % arrowThumb.length;
		var newImg = arrowThumb.eq(imgCounter).attr("src");
		console.log(imgCounter);
		console.log(newImg);
		arrowImg.attr("src", newImg);
	} else if($(this).hasClass('fowardArrow')){
		// imgCounter = imgCounter + 1;
		imgCounter = (imgCounter + 1) % arrowThumb.length;
		var newImg = arrowThumb.eq(imgCounter).attr("src");
		console.log(imgCounter);
		console.log(newImg);
		arrowImg.attr("src", newImg);

	}
	// console.log(arrowThumb.eq(3));
	// console.log(arrowImg);
})

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
				if(stepCounter === steps.length - 1) {
					steps.eq(stepCounter).hide();
					stepCounter = 1;
					steps.eq(stepCounter).show();
					currentStep = steps.eq(stepCounter);
					currentInput = currentStep.find('input[type="checkbox"]')
					$("body").css("overflow-y", "auto");
				} else {
					steps.eq(stepCounter).hide();
					stepCounter = (stepCounter + 1) % steps.length;
					steps.eq(stepCounter).show();
					currentStep = steps.eq(stepCounter);
					currentInput = currentStep.find('input[type="checkbox"]')
					$("body").css("overflow-y", "auto");
				}
				
			}

			////////// transition animation//////

				$(".transitionAnimation").css("display", "block");
					function fades(){
						$(".animationImage").fadeIn(750, function(){
							$(".animationImage").fadeOut(750, function(){
								transitionToNextStep();
								$('.animationLeft').animate({left: "-50%"}, 300);
								$('.animationRight').animate({right: "-50%"}, 300);
								$(".transitionAnimation").stop().fadeOut(500);
							});/////// end of fade out
						});/////end of fadeIn
					}//// end of fades
					$('.animationRight').animate({right: "0%"}, 300);
					$('.animationLeft').animate({left: "0%"}, 300, fades);

		})

		$('input').on('click', function(){
				currentInput.change(function(){
			    if(currentInput.length == currentInput.filter(":checked").length){
			       var allchecked = currentStep.find('.allChecked');
			   		allchecked.css("display", "block");
			    }
			});
		});

		$(".backButton").click(function(){
			steps.eq(stepCounter).hide();
			stepCounter = stepCounter - 1;
			steps.eq(stepCounter).show();
			currentStep = steps.eq(stepCounter);
			currentInput = currentStep.find('input[type="checkbox"]')

		})

	}
	 // guideStep();

});