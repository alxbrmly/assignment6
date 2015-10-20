$(document).ready(function() {

//$('h1').fadeOut(1000);
	
	$('h2').slideUp(1000);
	
	$('li').fadeOut(2000);
	
	$('p').animate ({ 
	  opacity: 0.25,   
	  width: "70%" } , 2000 
	);

	$('h3').slideUp();

	$('button').click(function() {
	  $('h1').fadeOut(1000);
	})

});


	// function() {
	//   $('h1').fadeOut(1000);
	// }


	// click( 
	// 		function()    {
	// 		code to be executed;
	// 		}
	// 	)