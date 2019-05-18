export default class SliderDot {
  constructor() {
    this.sliderDot = document.createElement('button');
    this.sliderDot.className = 'slider__slider-dot';
  }

  getSliderDot() {
    return this.sliderDot;
  }

  setActiveDot() {
    this.sliderDot.classList.add('dot_active');
  }

  setUnactiveDot() {
    this.sliderDot.classList.remove('dot_active');
  }
}
