$('.mainPage').hide();
$('.narutoFadeOut').hide();


$('#hero-search-button').on('click', function(any) {
    var FadeScreens;
    $('.narutoFadeIn').fadeOut();
    $('.narutoFadeOut').fadeIn(2000);
    $('.heroPage').fadeOut(7000)
    $('audio#pop')[0].play()
    $('.mainPage').fadeIn(5000)
    
});


