class Video {
	constructor(root) {
	this.root = $(root)
	this.root[0].children[0].onclick = this.onClick
	this.root[0].style.visibility = 'hidden'
	this.root[0].parentElement.parentElement.onkeyup = this.onKeyUp
	}

	onClick = () => {
		this.root[0].lastChild.remove()
		this.root[0].style.visibility = 'hidden'
	}

	setVis = () => {
		
		this.root[0].style.visibility = 'visible'

	}

	append = (string) => {
		//console.log(this.root[0].children.length)
		if(this.root[0].children.length===1)
			this.root.append(string)
		else {
			this.root[0].lastChild.remove()
			this.root.append(string)
		}
	}

	onKeyUp = (e) => {
		//console.log(e.code)
		if(e.code=='Escape') {
			this.root[0].lastChild.remove()
			this.root[0].style.visibility = 'hidden'
		}

	}





}