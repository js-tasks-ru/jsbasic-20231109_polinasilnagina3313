function initCarousel() {
  const slider = document.querySelector('.carousel');
  const sliderBtnLeft = slider.querySelector('.carousel__arrow_left');
  const sliderBtnRight = slider.querySelector('.carousel__arrow_right');
  const sliderInner = slider.querySelector('.carousel__inner');
  const slideWidth = sliderInner.offsetWidth;
  const countSlides = sliderInner.querySelectorAll('.carousel__slide').length;
  let currentSlideNumber = 0;

  const toggleButtons = () => {
    sliderBtnLeft.style.display = currentSlideNumber === 0 ? 'none' : '';
    sliderBtnRight.style.display = currentSlideNumber === countSlides - 1 ? 'none' : '';
  };
  toggleButtons();

  const changeSlide = (event) => {
    if (event.currentTarget === sliderBtnRight) {
      currentSlideNumber += 1;
    } else if (event.currentTarget === sliderBtnLeft) {
      currentSlideNumber -= 1;
    }

    sliderInner.style.transform = `translateX(-${slideWidth * currentSlideNumber}px)`;
    toggleButtons();
  };

  sliderBtnLeft.addEventListener('click', changeSlide);
  sliderBtnRight.addEventListener('click', changeSlide);
}
