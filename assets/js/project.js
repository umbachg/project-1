
$('#orbContain').hide();

$('#button').on('click', function(any){
    var fadeIn
    
    $('#orbContain').show();//.addClass('zoomIn animated slower');
    animateCSS('#orb', 'rollIn', () => {
        $('#orbContain').addClass('scaled')

        animateCSS('#orb', 'heartBeat', () => {
            $('#orb').addClass('spinning')

            // animateCSS('#orb', 'zoomIn');
    });
        
    })
})



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



$('.mainPage').hide();
$('.narutoFadeOut').hide();
$('#chibiNaru').hide();
$('#chibiSus').hide();
$('#shatter').hide();



$('#hero-search-button').on('click', function(any) {
    var FadeScreens;
    $('.narutoFadeIn').fadeOut();
    $('.narutoFadeOut').fadeIn();
    $('.heroPage').fadeOut(3000);
    $('.narutoFadeOut').addClass("zoomIn animated");
    $('.heroPage').addClass('jello animated');
    $('audio#pop')[0].play();
    $('.mainPage').fadeIn(5000);
    
});


