$('.team__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [    
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 578,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});