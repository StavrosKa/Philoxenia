
// Kalw to computerkai me tis parametrous tou
			$(function (){
				$('#midnightCalc1').calculator({calculatorClass: 'midnight', 
				closeText: 'Clo', useText: 'Use', eraseText: 'Era', 
				showOn: 'both', buttonImageOnly: true, buttonImage: 'images/des/calculator.png'});
				$('#midnightCalc2').calculator({calculatorClass: 'midnight', 
				closeText: 'Clo', useText: 'Use', eraseText: 'Era', 
				showOn: 'both', buttonImageOnly: true, buttonImage: 'images/des/calculator.png'});
				$('#midnightCalc3').calculator({calculatorClass: 'midnight', 
				closeText: 'Clo', useText: 'Use', eraseText: 'Era', 
				showOn: 'both', buttonImageOnly: true, buttonImage: 'images/des/calculator.png'});
			});
			
//To dexi kai aristero arrow to megalwnw kai to mikrainw an einai mikrotero tou 768 pixel

			 $(window).on('resize', function(){
				var win = $(this);
 				if (win.width() <= 767) { 
					
					$('#right-arrow').removeClass("fa-3x").addClass("fa-2x");
					$('#left-arrow').removeClass("fa-3x").addClass("fa-2x");
					
				}
				else if ((win.width() > 768) && (win.width() <= 992)){
					
					$('#right-arrow').removeClass("fa-4x").addClass("fa-3x");
					$('#left-arrow').removeClass("fa-4x").addClass("fa-3x");
						
				}
					else  {
						$('#right-arrow').removeClass("fa-3x").addClass("fa-4x");
						$('#left-arrow').removeClass("fa-3x").addClass("fa-4x");
					}
/* 					else if{
						$('#right-arrow').removeClass("fa-2x").addClass("fa-3x");
						$('#left-arrow').removeClass("fa-2x").addClass("fa-3x");
					} */
					
					/* prepei na to vrw */

			});
			
			
//axreiasto paradeigma toy kompiouter

/* 	<!-- Basic Calculator -->
<!--   			$(function () {
				$.calculator.setDefaults({showOn: 'both', buttonImageOnly: true, buttonImage: 'images/des/calculator.png'});
				$('#basicCalculator1').calculator();
				$('#basicCalculator2').calculator();
			});   --> */