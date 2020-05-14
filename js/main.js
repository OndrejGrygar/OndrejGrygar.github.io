$(document).ready(function() {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    });

/** owl-carousel*/
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout: 4000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
    });
});
$(document).ready(function(){
    $('.next').click(function(){
        $('.pagination').find('.cislastranek .active').next().addClass('active');
        $('.pagination').find('.cislastranek .active').prev().removeClass('active'); 
    });
    $('.prev').click(function(){
        $('.pagination').find('.cislastranek .active').prev().addClass('active');
        $('.pagination').find('.cislastranek .active').next().removeClass('active'); 
    });
})