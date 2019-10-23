
$('#orbContain').hide();
$('#mainPage').hide();

$('#hero-search-button').on('click', function (any) {
    var fadeIn
    $('#orbContain').show();//.addClass('zoomIn animated slower');
    animateCSS('#orb', 'rollIn', () => {
        $('#orbContain').addClass('scaled')

        animateCSS('#orb', 'pulse', () => {
            $('#orb').addClass('spinning')

            // animateCSS('#orb', 'zoomIn');
        });
    })
    $('.stat').addClass('flip animated slow')
});

$('#index-search-button').on('click', function(){
    $('.mainPage').fadeOut()
    $('.mainPage').fadeIn(2000)
   animateCSS('#orbContain', 'zoomOut', () =>{
       $('#orbContain').addClass('heartBeat')
   })
   $('.stat').addClass('flip animated slow')
})

$('#hero-search-button-img').mouseenter(function () {
    $('#hero-search-button-img').removeClass('flash').addClass('heartBeat');
})

$('#hero-search-button-img').mouseleave(function () {

    $('#hero-search-button-img').removeClass('heartBeat').addClass('flash');
})

$('#hero-search-button').on('click', function (any) {
    var FadeScreens;
    $('.heroPage').fadeOut();
    $('.heroPage').addClass('jello animated');
    $('#mainPage').fadeIn(3500);

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





