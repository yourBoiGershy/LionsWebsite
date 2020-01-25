function slide(option) {
    let homeCarousel = M.Carousel.getInstance(document.querySelector('.carousel'))
    if (option == 1) {
        homeCarousel.next()
    } else {
        homeCarousel.prev()
    }
}