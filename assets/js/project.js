
$('#orbContain').hide();
$('#mainPage').hide();

$('#hero-search-button').on('click', function (any) {
    var fadeIn

    $('#orbContain').show();//.addClass('zoomIn animated slower');
    animateCSS('#orb', 'rollIn', () => {
        $('#orbContain').addClass('scaled')

        animateCSS('#orb', 'flash1', () => {
            $('#orb').addClass('spinning')

            // animateCSS('#orb', 'zoomIn');
        });

    })
});

$('#hero-search-button-img').mouseenter(function () {
    $('#hero-search-button-img').removeClass('flash').addClass('heartBeat');
})

$('#hero-search-button-img').mouseleave(function () {

    $('#hero-search-button-img').removeClass('heartBeat').addClass('flash');
})

$('#hero-search-button').on('click', function (any) {
    var FadeScreens;
    // $('.narutoFadeIn').fadeOut();
    // $('.narutoFadeOut').fadeIn();
    $('.heroPage').fadeOut();
    // $('.narutoFadeOut').addClass("zoomIn animated ");
    $('.heroPage').addClass('jello animated');
    // $('audio#pop')[0].play();
    $('.mainPage').fadeIn(3500);

});


function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}





