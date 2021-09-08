class RouterEngine {

	init() {
		$(".router-link").click(this.onRouterLinkClick)
	}
	onRouterLinkClick = (e) => {
		this.navigate(e)
		
	}
	navigate = (e) => {
		$(".screen").hide()
		let dataComponent = $(e.target).data("component")
		this.showComponent(dataComponent)
	}
	showComponent = (dataComponent) => {
		$(dataComponent).show()
	}
}
var router = new RouterEngine() 