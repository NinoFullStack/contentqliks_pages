new Swiper('#featured-company-slider', {
  slidesPerView: 6,
  spaceBetween: 50,
  grabCursor: true,
  autoplay: {
    delay: 2500,
  },
})

const spotlightsTechnologiesSlider = new Swiper('.spotlights-technologies', {
  slidesPerView: 4,
  spaceBetween: 25,
  grabCursor: true,
  on: {
    init() {
      if (this.el.dataset.lastslider) {
        this.activeIndex = this.slides.length
      }
    },
  },
})
