$(document).ready(function(){

    $( document ).on("click", ".pjClass", function(){

        $(".pjSheet").toggleClass( this );

      	if ( $(".pjEditor").length <=1){

      		$(".pjEditor").append( $(".pjSheet") );

      		$(".pjSheet").toggleClass("hide");


      	}

     	else {
    	
   			alert('Termina de editar un personaje para empezar con otro');
    	};

		console.log($(".pjEditor").length);

	}); 

 //    $( document ).on("click", ".selected", function(e){

 //   		$(".character-list").append( this );
 //     	$(this).toggleClass("character-bio selected")

	// 	console.log($(".team li").length);

	// }); 

});