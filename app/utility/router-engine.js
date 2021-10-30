class RouterEngine {
  init() {
    $(".router-link").click(this.onRouterLinkClick);
  }
  onRouterLinkClick = (e) => {
    $(".screen").hide();
    let dataComponent = $(e.target).data("component");
    this.navigate(dataComponent);
  };

  navigate = (dataComponent) => {
    $(".screen").hide();
    $(dataComponent).show();
  };
}
var router = new RouterEngine();
