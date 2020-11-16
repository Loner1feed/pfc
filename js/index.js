let scrollTop = $(window).scrollTop();
// let scrollFromBanner = $('.mainBanner').height();
// console.log(scrollFromBanner);

$(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    // console.log(scrollTop);
    if(scrollTop >= 50){
        $('.header').addClass('header--fixed');
        
    }else{
        $('.header').removeClass('header--fixed');
    }
})


$('.header__toggler').click(function(){
    $('.header__nav').toggleClass('header__nav--open');
})

$('.about__slider-wrap').slick({
    infinite: true,
    prevArrow: '<div class="about__slider-arrow about__slider-arrow--prev"><span class="icon-chevron-up-solid"></span></div>',
    nextArrow: '<div class="about__slider-arrow about__slider-arrow--next"><span class="icon-chevron-up-solid"></span></div>',
    appendArrows: '.about__slider-arrows',
});

