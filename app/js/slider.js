function slider() {
  const arrowLeft = document.querySelector('.slider__arrow-left');
  const arrowRight = document.querySelector('.slider__arrow-right');
  const content = document.querySelector('.slider__content');
  const slides = document.querySelectorAll('.slider__slide')
  const controlsCircle = document.querySelectorAll('.slider__controls-circle')

  let startingPosition = 0;
  let numberSlide = (slides.length - 1) * 100;

  function contentMarginLeft(number) {
    startingPosition = number
    content.style.marginLeft = `-${number}%`;
  }

  function sliderArrows() {
    arrowLeft.addEventListener('click', () => {
      startingPosition -= 100;
      contentMarginLeft(startingPosition)

      if (startingPosition < 0) {
        startingPosition = numberSlide;
        contentMarginLeft(startingPosition)
        addClassCircle(startingPosition / 100)

      } else {
        addClassCircle(startingPosition / 100)
      }
    })
    arrowRight.addEventListener('click', () => {
      startingPosition += 100;
      contentMarginLeft(startingPosition)

      if (startingPosition > numberSlide) {
        startingPosition = 0;
        contentMarginLeft(startingPosition)
        addClassCircle(startingPosition / 100)
      } else {
        addClassCircle(startingPosition / 100)
      }
    })
  }

  function sliderControls() {
    controlsCircle.forEach((circle, index) => {
      circle.addEventListener('click', () => {
        clearClassCircle();
        circle.classList.add('-active');
        let position = 100 * (index)
        contentMarginLeft(position)
      })
    })

  }
  function clearClassCircle() {
    controlsCircle.forEach(circle => {
      circle.classList.remove('-active')
    })
  }

  function addClassCircle(index) {
    console.log(index);
    clearClassCircle();
    controlsCircle[index].classList.add('-active');
  }

  sliderControls();
  sliderArrows();
}


slider();