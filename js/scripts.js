
$( document ).ready(function() {

		for (var i = 1; i <= 39; i++) {
    	    var imagen = $('<img>').attr({
	     		src:'img/'+getZero(i)+'.png',
	     		id:'modulo'+i,
	     		class: 'modulos' 
	     	});  
			$("#selector").append(imagen);
		};

		function getZero(n){
			if (n.toString().length <2) {
				return '0'+ n
			}else{
				return n
			};
		}

		$('.slider').slider().on('slide', function(ev){
			var modulosSlider = $('#sliderCloset').val();
			var modulosTotal = $('#closet').find('img').length;
			console.log(modulosTotal + " " + modulosSlider);
 
			if (modulosTotal <= modulosSlider) {
				for (var i = modulosTotal; i <= modulosSlider-1; i++) {
				$("#closet").append("<div><img src='img/01.png'/></div>");
				};

 			}else if(modulosTotal > modulosSlider){
 				$("#closet div").last().remove(); 
  			};   

		});

		$('.modulos').click(function() {
			
		});

});
