new Swiper('#featured-company-slider', {
  slidesPerView: 6,
  spaceBetween: 50,
  grabCursor: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    400: { slidesPerView: 2 },
    700: { slidesPerView: 3 },
    800: { slidesPerView: 4 },
    1000: { slidesPerView: 6 },
  },
})

const spotlightsTechnologiesSlider = new Swiper('.spotlights-technologies', {
  slidesPerView: 4,
  spaceBetween: 25,
  grabCursor: true,
  breakpoints: {
    250: { slidesPerView: 1 },
    470: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1000: { slidesPerView: 4 },
  },
  on: {
    init() {
      if (this.el.dataset.lastslider) {
        this.activeIndex = this.slides.length
      }
    },
  },
})

const counterUp = (interval = 1) => {
  const counterItems = document.querySelectorAll('[data-counter]')

  counterItems.forEach(item => {
    let startValue = 1
    const endValue = parseInt(item.getAttribute('data-counter'))
    const duration = Math.floor(interval / endValue)

    let counter = setInterval(() => {
      startValue += 1

      if (endValue.toString().length >= 5) {
        if (startValue <= 10000) {
          startValue += 50
        }

        if (startValue >= 10000 && !(startValue >= 11000)) {
          startValue += 5
        }

        if (startValue >= 11000) {
          startValue += 1
        }
      }

      item.textContent = startValue

      if (startValue === endValue) clearInterval(counter)
    }, duration)
  })
}

const isViewCounter = () => {
  const counters = document.querySelectorAll('[data-counter]')

  counters.forEach(counter => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(item => {
        if (item.isIntersecting) {
          counterUp(1000)
        }
      })
    })

    observer.observe(counter)
  })
}

const toggleMenuHeader = () => {
  const header = document.querySelector('.header')
  const btn = header?.querySelector('.header-menu')

  btn?.addEventListener('click', () => {
    header.classList.toggle('header--active')
    btn.classList.toggle('header-menu--active')

    if (header.classList.contains('header--active')) {
      document.body.style.overflow = 'hidden'
    }
  })
}

isViewCounter()
toggleMenuHeader()
