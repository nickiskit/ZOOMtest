class Poster {
	
	constructor(root, disp) {
		this.root = $(root) 
		this.src = this.root[0].children[1].src
		this.name = this.root[0].textContent
		this.disp = disp
		this.focus = false
		
					
		
		this.setStyle = () => {
			this.root[0].style.float = 'left'
			this.root[0].style.height = '450px'
			this.root[0].style.marginLeft = '125px'
			this.root[0].style.marginRight = '0'
			this.root[0].style.marginTop = '50px'


		}

		this.root[0].children[1].onmousemove = this.onMouseMove
		this.root[0].children[1].onmouseleave = this.onMouseLeave
		this.root[0].children[1].onclick = this.onClick
	

}

	onMouseMove = () => {
		
		this.root[0].children[1].style.border = '1px solid red'
		this.focus = true

	}	

	onMouseLeave = () => {
		
		this.root[0].children[1].style.border = 'none'
		this.focus = false
	}

	onClick = (e) => {
		//console.log(e.target)
		var disp = this.disp
		var id = e.target.id

		fetch('http://localhost:5000/getData').then(function(response){response.json().then(function(data){
		
		var data = $.grep(data.result, function(index){
			
			return (index.id==id)
		})

		data = data[0]
		//console.log(data.video_src)
		var video = "<video  width='640' height='480' controls='controls' poster='"+data.poster_src+"'><source src='"+data.video_src +"' type='video/mp4'></video>"
		//console.log(video)
		//var V  = new Video('#videoPlayer')
		//console.log(disp)
		
		disp.append(video)
		disp.setVis()
		

	})})}

}
		
	

