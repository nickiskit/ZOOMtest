$(document).ready(function(){

	//delay()-Устанавливает таймер задержки выполнения очередных функций-эффектов (следующих пунктов в очереди) для соответствующих элементов набора jQuery.
	// fadeOut() - исчезновение элемента
	$("#preloader").delay(2000).fadeOut();

	$.getJSON('http://localhost:5000/getData', function(data){
		var imgArr = $.map(data.result, function(index){
	
			return ("<div id='poster'><p>"+index.name+"</p><img id='" + index.id+ "' src='"+index.poster_src+"'></div>")
		}).join(' ')

		
		//console.log("hi ", imgArr)
		$("#posters").html(imgArr)
	})

	
	$('#posters').on('click', 'img', function(e){
		var id = e.target.id

		$.getJSON('http://localhost:5000/getData', function(data){
		
		var data = $.grep(data.result, function(index){
			
			return (index.id==id)
		})

		data = data[0]
		console.log(data.video_src)
		var video = "<button id='back'>BACK</button><video  width='640' height='480' controls='controls' poster='"+data.poster_src+"'><source src='"+data.video_src +"' type='video/mp4'></video>"
		console.log(video)
		$('#videoPlayer').html(video)
		$('#videoPlayer').css('visibility', 'visible')
		
	}) 

	})

	$('#videoPlayer').on('click','#back', function(){
		$('#videoPlayer').css('visibility', 'hidden')
		console.log('aaaaaaaaaa')
	})	

})