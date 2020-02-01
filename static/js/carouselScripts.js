const autoplayDelay = 10000

/**
 * Helper function to add to slide index
 */
function addSlideIndex() {
    slideIndex++
    if(slideIndex >= numSlides) {
        slideIndex = 0
    }
}

/**
 * Helper function to subtract to slide index
 */
function subtractSlideIndex() {
    slideIndex--
    if(slideIndex < 0) {
        slideIndex = numSlides-1
    }
}

/**
 * Slides carousel from button click and disables buttons for a bit of time after
 * @param {int} option
 * option determines which way to slide 
 */
function slide(option) {
    //slide carousel using buttons
    let homeCarousel = M.Carousel.getInstance(document.querySelector('.carousel'))
    if (option == 1) {
        homeCarousel.next()
        addSlideIndex()
    } else {
        homeCarousel.prev()
        subtractSlideIndex()
    }
    reloadStaggerList()

    //disable buttons for 300 milliseconds
    let sliderButtons = document.querySelectorAll('.btn-sliders')
    for (let i = 0; i < sliderButtons.length; i++) {
        sliderButtons[i].className = sliderButtons[i].className.concat(' disabled')
    }
    
    setTimeout(function() {
        for (let i = 0; i < sliderButtons.length; i++) {
            sliderButtons[i].className = sliderButtons[i].className.substring(0, sliderButtons[i].className.length-9)
        }
    }, 300)
}

/**
 * Reload image's corresponding captions in the carousel
 */
function reloadStaggerList(){
    let container = document.querySelectorAll(".staggered-list")
    for(let i = 0; i < container.length; i++) {
        container[i].style.opacity = 0
    }
    setTimeout(function() {
        for(let i = 0; i < container.length; i++) {
            let content = container[i].innerHTML
            container[i].style.opacity = 1
            container[i].innerHTML= content
        }
    }, 200)
}

/**
 * Begins autoslide
 */
function startAutoslide() {
    let homeCarousel = M.Carousel.getInstance(document.querySelector('.carousel'))
    autoslide(0, homeCarousel)
}

/**
 * Slides carousel automatically after 0.9 seconds
 * @param {int} time
 * keeps track of delay
 */
function autoslide(time, carouselInstance, autoplaySlideIndex) {

    //Check if slide has been manually changed to reset the autoplay timer
    if(autoplaySlideIndex != slideIndex) {
        autoplaySlideIndex = slideIndex
        time = 0
    } else if (time >= autoplayDelay) {//autoslide
        carouselInstance.next()
        addSlideIndex()
        reloadStaggerList()

        autoplaySlideIndex = slideIndex
        time = 0
        
    }

    let increment = 100
    setTimeout(function() {
        autoslide(time+increment, carouselInstance, autoplaySlideIndex)
    }, increment)
}

/**
 * Use new set of modals for a new slide
 */
function updateModals() {
    let allModals = document.querySelectorAll('.package')
    for(let i = 0; i < allModals.length; i++) {
        if(allModals[i].id == 'selected-package'){
            allModals[i].id = 'package' + i
        } else if(i == slideIndex) {
            allModals[i].id = 'selected-package'
        }
    }
}

function setSlide(selectedSlideIndex) {
    let homeCarousel = M.Carousel.getInstance(document.querySelector('.carousel'))
    homeCarousel.set(selectedSlideIndex)
    reloadStaggerList()
}