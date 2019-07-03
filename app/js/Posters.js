class Posters {
	
	constructor(root, disp) {
		this.root = $(root) 
		this.disp = disp
		this.focusElemInd = -1
		this.children = function(e){
				var L = []
				fetch('http://localhost:5000/getData').then(function(response){response.json().then(function(data){
					//console.log(data)
					$.each(data.result, function(index, element){
					
					e.root.append("<div id='poster" + element.id+"'><p>"+element.name+"</p><img id='" + element.id+ "' src='"+element.poster_src+"'></div>")
					var p = new Poster("#poster"+element.id, disp)
					p.setStyle()
					L.push(p)
				//console.log(p)

					})
					})})
				
				return L
			
			
		}(this) 

		this.root[0].parentElement.onkeyup = this.onKeyUp
		this.root[0].parentElement.onkeydown = this.onKeyDown
}
	
	onKeyUp = (e) => {

		switch (e.code) {
			case 'ArrowRight':
				this.focusElemInd = this.focusElemInd == this.children.length-1 ? 0 : this.focusElemInd+1
				this.children[this.focusElemInd].root[0].children[1].style.border = '1px solid red'
				this.children[this.focusElemInd].focus = true
				break
			case 'ArrowLeft':
				this.focusElemInd = (this.focusElemInd == -1 || this.focusElemInd==0) ? this.children.length-1 : this.focusElemInd-1 
				this.children[this.focusElemInd].root[0].children[1].style.border = '1px solid red'
				this.children[this.focusElemInd].focus = true
				break
			case 'ArrowDown':
				if(this.focusElemInd==-1)
					this.focusElemInd = 3	
				else
					this.focusElemInd = (this.focusElemInd+3)<this.children.length ? this.focusElemInd+3:this.focusElemInd
				this.children[this.focusElemInd].root[0].children[1].style.border = '1px solid red'
				this.children[this.focusElemInd].focus = true
				break
			case 'ArrowUp':
				if(this.focusElemInd==-1)
					this.focusElemInd = 0	
				else
					this.focusElemInd = (this.focusElemInd-3)>=0 ? this.focusElemInd-3:this.focusElemInd
				this.children[this.focusElemInd].root[0].children[1].style.border = '1px solid red'
				this.children[this.focusElemInd].focus = true
				break
			case 'Enter':
				this.children[this.focusElemInd].focus = true
				//this.children[this.focusElemInd].focus = true
				var numb = this.children[this.focusElemInd].root[0].children[1].id
				var t = {target:{id:numb}}
				this.children[this.focusElemInd].onClick(t)
					
				break
			default:
				break
		}
	}

	onKeyDown = (e) => {
		if(e.code=='ArrowRight' || e.code=='ArrowLeft' || e.code=='ArrowDown' || e.code=='ArrowUp'|| e.code=='Enter' ) {
			this.children[this.focusElemInd].root[0].children[1].style.border = 'none'
			this.children[this.focusElemInd].focus = false
		}

	}

}

