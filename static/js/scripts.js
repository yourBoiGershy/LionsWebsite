var slideIndex = 0
const numSlides = 5

function addSlideIndex() {
    slideIndex += 1
    if (slideIndex >= numSlides) {
        slideIndex = 0
    }
    console.log(slideIndex)
}

function subtractSlideIndex() {
    slideIndex -= 1
    if (slideIndex < 0) {
        slideIndex = numSlides-1
    }
    console.log(slideIndex)
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
    } else if (time >= 9000) {//autoslide
        carouselInstance.next()
        addSlideIndex()
        autoplaySlideIndex = slideIndex
        time = 0
    }

    let increment = 10
    setTimeout(function() {
        autoslide(time+increment, carouselInstance, autoplaySlideIndex)
    }, increment)
}