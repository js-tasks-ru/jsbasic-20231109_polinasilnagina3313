import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.createElement();
    this.btnSliderLeft = this.elem.querySelector('.carousel__arrow_left');
    this.btnSliderRight = this.elem.querySelector('.carousel__arrow_right');
    this.sliderInner = this.elem.querySelector('.carousel__inner');
    this.buttonsPlus = this.elem.querySelectorAll('.carousel__button');
    this.countSlides = this.slides.length;
    this.currentSlideNumber = 0;

    this.init();
  }

  init() {
    this.toggleButtons();
    this.addListeners();
  }

  toggleButtons() {
    this.btnSliderLeft.style.display = this.currentSlideNumber === 0 ? 'none' : '';
    this.btnSliderRight.style.display = this.currentSlideNumber === this.countSlides - 1 ? 'none' : '';
  }

  changeSlide(event) {
    if (event.currentTarget === this.btnSliderRight) {
      this.currentSlideNumber += 1;
    } else if (event.currentTarget === this.btnSliderLeft) {
      this.currentSlideNumber -= 1;
    }

    this.sliderInner.style.transform =
      `translateX(-${this.sliderInner.offsetWidth * this.currentSlideNumber}px)`;
    this.toggleButtons();
  }

  addListeners() {
    this.btnSliderLeft.addEventListener('click', (event) => this.changeSlide(event));
    this.btnSliderRight.addEventListener('click', (event) => this.changeSlide(event));

    this.buttonsPlus.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.elem.dispatchEvent(new CustomEvent('product-add', {
          detail: this.slides[index].id,
          bubbles: true,
        }));
      });
    });
  }

  createElement() {
    return createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">  
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>

        <div class="carousel__inner">
          ${this.slides.map(item => `
            <div class="carousel__slide" data-id="${item.id}">
              <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
              <div class="carousel__caption">
                <span class="carousel__price">€${item.price.toFixed(2)}</span>
                <div class="carousel__title">${item.name}</div>
                <button type="button" class="carousel__button">
                  <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `);
  }
}
