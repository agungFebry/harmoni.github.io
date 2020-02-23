$(function()
{
    // smooth scroll
    $(".page-scroll").on('click', function(event) 
    {      
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate(
        {
            scrollTop: $(hash).offset().top - 100
        }, 1000);
    });

// loading
$(".loader").fadeOut(2500);

// sidebar
});

$(function(){
    $('.navbar-toggler').on('click', function () {
        $(".navbar-collapse").fadeIn(500);
    });

    $('.icon-close').on('click', function () {
        $(".navbar-collapse").fadeOut(500);
    });

});