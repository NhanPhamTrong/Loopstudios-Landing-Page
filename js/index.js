const heroImage = $(".hero-image");
const menu = $("#menu");
const menuToggler = $(".menu-toggler");

function OpenMenu() {
    menuToggler.toggleClass("active");
    menu.toggleClass("open");
    $("nav").toggleClass("open-menu");
}

function ChangeScreenWidth() {
    if ($(window).width() <= 992) { // 375px is mobile breakpoint
        heroImage.attr("src", "./images/mobile/image-interactive.jpg");
    }
    else {
        heroImage.attr("src", "./images/desktop/image-interactive.jpg");
    }
}
  
ChangeScreenWidth();
$(window).resize(ChangeScreenWidth);

$("a").click(function(event) {
	event.preventDefault();
});