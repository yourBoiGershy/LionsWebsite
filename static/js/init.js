document.addEventListener('DOMContentLoaded', function() {
    
    //Carousel init
    let carousel = document.querySelectorAll('.carousel')
    M.Carousel.init(carousel, {
        fullWidth:true,
        indicators:true,
        duration:100,
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