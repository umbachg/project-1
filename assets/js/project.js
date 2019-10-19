$('.mainPage').hide();
$('.narutoFadeOut').hide();



$('#hero-button').on('click', function(any) {
    var FadeScreens;
    $('.narutoFadeIn').fadeOut();
    $('.narutoFadeOut').fadeIn();
    $('.heroPage').fadeOut(3000);
    $('.narutoFadeOut').addClass("zoomIn animated");
    $('.heroPage').addClass('jello animated');
    $('audio#pop')[0].play();
    $('.mainPage').fadeIn(5000);
    
});


