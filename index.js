$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    navText: [
    "<i class='bi bi-chevron-bar-left'></i>",
    "<i class='bi bi-chevron-bar-right'></i>"
  ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})