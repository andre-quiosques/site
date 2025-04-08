


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    mouseDrag:false,
    autoplay:false,
    animateOut: 'slideOuRight',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
function showMenu(){
    let menu = document.querySelector(".mobile-menu");
    if(menu.classList.contains('open')){
        menu.classList.remove('open');
        document.querySelector(".icon").src = "./images/menu_white_36dp.svg";

    }else{
        menu.classList.add('open');
        document.querySelector(".icon").src = "./images/close_white_36dp.svg";
    }
}
