export const addDotBtnsAndClickHandlers = (
    emblaApib,
    dotsNodeb,
    onNavButtonClickb
  ) => {
    let dotNodesb = []
  
    const addDotBtnsWithClickHandlers = () => {
      dotsNodeb.innerHTML = emblaApib
        .scrollSnapList()
        .map(() => '<button class="embla__dot" type="button"></button>')
        .join('')
  
      const scrollTo = (index) => {
        emblaApib.scrollTo(index)
        if (onButtonClick) onButtonClick(emblaApib)
      }
  
      dotNodesb = Array.from(dotsNodeb.querySelectorAll('.embla__dotsb'))
      dotNodesb.forEach((dotNodeb, index) => {
        dotNodeb.addEventListener('click', () => scrollTo(index), false)
      })
    }
  
    const toggleDotBtnsActive = () => {
      const previous = emblaApib.previousScrollSnap()
      const selected = emblaApib.selectedScrollSnap()
      dotNodes[previous].classList.remove('embla__dot--selectedb')
      dotNodes[selected].classList.add('embla__dot--selectedb')
    }
  
    emblaApi
      .on('init', addDotBtnsWithClickHandlers)
      .on('reInit', addDotBtnsWithClickHandlers)
      .on('init', toggleDotBtnsActive)
      .on('reInit', toggleDotBtnsActive)
      .on('select', toggleDotBtnsActive)
  
    return () => {
      dotsNodeb.innerHTML = ''
    }
  }
  