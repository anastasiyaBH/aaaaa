export default class SliderDot {
  constructor(num) {
    this.sliderDot = document.createElement('button');
    this.sliderDot.className = 'slider__slider-dot';
    this.number = num;
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
