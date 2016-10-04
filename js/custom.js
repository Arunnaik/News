$(document).ready(function(){
$(".button").click(function(){
$(".Offscreen").toggleClass("is-Open");
});
});


jQuery( document ).ready( function( $ ) {
   
   
    var target = $('nav').offset().top;

$(window).scroll(function() {
    
    if ($(window).scrollTop() > target) {
        
        $('.navigation').addClass('sticky');
        
    } else {
        
        $('.navigation').removeClass('sticky');       
    }
    
});

});
$('.bxslider').bxSlider({
minSlides: 3,
maxSlides: 3,
slideWidth: 350,
slideMargin: 10,
adaptiveHeight: true,
preventDefaultSwipeX: false

});
