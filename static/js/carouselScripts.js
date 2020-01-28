
const numSlides = 3
const autoplayDelay = 7000
const captions = [
    [
        "Rookie of the year 2019!",
        "At North Bay District Event",
        "We are proud of making provincials last year and we are aiming for no less this year!"
    ],
    [
        "Banff",
        "A True Wild Canadian Experience",
        "A paradise in the Canadian Rockies, thousands of tourists flock here each year to see the mountains, glaciers and wildlife"
    ],
    [
        "Cape Breton",
        "& The Infamous Cabot Trail",
        "Best seen during the fall, this ride along the small Nova Scotian island is breathtaking and is a one-of-a-kind adventure"
    ]
]

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
    } else {
        homeCarousel.prev()
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
    setTimeout(function() {
        let container = document.querySelector(".staggered-list")
        document.querySelector('#title').textContent = captions[slideIndex][0]
        document.querySelector('#subject').textContent = captions[slideIndex][1]
        document.querySelector('#body').textContent = captions[slideIndex][2]
        let content = container.innerHTML
        container.innerHTML= content
    }, 100)
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

        reloadStaggerList()
        autoplaySlideIndex = slideIndex
        time = 0
        
    }

    let increment = 50
    setTimeout(function() {
        autoslide(time+increment, carouselInstance, autoplaySlideIndex)
    }, increment)
}