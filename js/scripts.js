
$( document ).ready(function() {
	/* Init */
	for (var i = 1; i <= 38; i++) {
    	var imagen = $('<img>').attr({
	    	src:'img/'+getZero(i)+'.png',
	     	id:'modulo'+i,
	     	class: 'modulos',
	     	draggable: 'true' 
	     });  
    	imagen.on('dragstart', saveData);
		$("#selector").append(imagen);
	};
	$('#closet div').on('dragover', enableDrop);
	$('#closet div').on('drop', checkCollision);

	/* Listeners */
	$('.slider').slider().on('slide', function(ev){
		var modulosSlider = $('#sliderCloset').val();
		var modulosTotal = $('#closet').find('img').length;
		console.log("t:"+modulosTotal + " s:" + modulosSlider);
 
		if (modulosTotal <= modulosSlider) {
			for (var i = modulosTotal; i <= modulosSlider-1; i++) {
				$("#closet").append("<div><img src='img/01.png'/></div>");
			};
		}else if(modulosTotal > modulosSlider){
 			$("#closet div").last().remove(); 
  		};  
  		$('#closet div').on('dragover', enableDrop);
		$('#closet div').on('drop', checkCollision); 
	});

	/* Functions */
	var imgsrc = '';
	function saveData(e){
		imgsrc = $(this).attr('src');
		console.log(imgsrc);
	}
	function enableDrop(e){
		if(e.preventDefault) e.preventDefault();
		return false;
	}
	function checkCollision(e){
		var img = $(this).find('img')[0];
		$(img).attr('src', imgsrc);
	}
	function getZero(n){
		if (n.toString().length <2) {
			return '0'+ n
		}else{
			return n
		};
	}
});
