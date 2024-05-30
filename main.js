import EmblaCarousel from 'embla-carousel'

const emblaNode = document.querySelector('.embla__viewport')
const options = { loop: false,
    speed: 3,
    dragFree: true,
    skipSnaps:false,
 }
const emblaApi = EmblaCarousel(emblaNode, options)

console.log(emblaApi.slideNodes()) // Access API


//autoplay
let autoplayInterval;

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    embla.scrollNext();
  }, 3000); // Change slide every 3 seconds
};

const stopAutoplay = () => {
  clearInterval(autoplayInterval);
};

embla.on('pointerDown', stopAutoplay);
embla.on('init', startAutoplay);

//embla for Testimonials

const OPTIONS = {}

const emblaNode1 = document.querySelector('.embla')
const viewportNode = emblaNode.querySelector('.embla__viewport')
const prevBtnNode = emblaNode.querySelector('.embla__button--prev')
const nextBtnNode = emblaNode.querySelector('.embla__button--next')

const emblaApi1 = EmblaCarousel(viewportNode, OPTIONS, [Autoplay()])

const onNavButtonClick = (emblaApi1) => {
  const autoplay = emblaApi1?.plugins()?.autoplay
  if (!autoplay) return

  const resetOrStop =
    autoplay.options.stopOnInteraction === false
      ? autoplay.reset
      : autoplay.stop

  resetOrStop()
}

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
  emblaApi1,
  prevBtnNode,
  nextBtnNode,
  onNavButtonClick
)

emblaApi1.on('destroy', removePrevNextBtnsClickHandlers)


// blogs part

const OPTIONSb = {}

const emblaNodeb = document.querySelector('.emblab')
const viewportNodeb = emblaNodeb.querySelector('.embla__viewportb')
const dotsNodeb = emblaNodeb.querySelector('.embla__dotsb')

const emblaApib = EmblaCarousel(viewportNodeb, OPTIONSb, [Autoplay()])

const onNavButtonClickb = (emblaApib) => {
  const autoplay = emblaApib?.plugins()?.autoplay
  if (!autoplay) return

  const resetOrStop =
    autoplay.options.stopOnInteraction === false
      ? autoplay.reset
      : autoplay.stop

  resetOrStop()
}

const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
  emblaApi,
  dotsNode,
  onNavButtonClick
)

emblaApi.on('destroy', removeDotBtnsAndClickHandlers)




// import EmblaCarousel from 'embla-carousel'
// // import '../css/base.css'
// import '../css/sandbox.css'
// import 'embla.css'

// const OPTIONS = {}

// const emblaNode = document.querySelector('.embla')
// const viewportNode = emblaNode.querySelector('.embla__viewport')

// const emblaApi = EmblaCarousel(viewportNode, OPTIONS)
