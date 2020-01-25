document.addEventListener('DOMContentLoaded', function() {
    
    //Carousel init
    let carousel = document.querySelectorAll('.carousel')
    M.Carousel.init(carousel, {
        numVisible:1,
        fullWidth:true,
        indicators:true
    })

    //Dropdown init
    let dropdown = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdown, {
        hover:true
    });

    let mobile = document.querySelectorAll('.sidenav')
    M.Sidenav.init(mobile, {

    })

})