/* eslint-disable no-console */
import ClipsLine from './ClipsLine';
import SliderDot from '../components/SliderDot';

export default class Slider {
  constructor() {
    this.slider = document.createElement('div');
    this.slider.className = 'slider';

    this.arrayClips = [];

    this.clipsLine = new ClipsLine().getClipsLine();
    this.slider.appendChild(this.clipsLine);

    this.dotsLine = document.createElement('div');
    this.dotsLine.className = 'dots-line';

    this.slider.appendChild(this.dotsLine);
  }

  getSlider() {
    return this.slider;
  }

  addClips(arrayClips) {
    this.arrayClips = arrayClips;
    console.log(this.arrayClips);
    this.setSlider();
  }

  setSlider() {
    const old = this.slider.querySelector('.clips-line');
    old.innerHTML = '';
    this.dotsLine.innerHTML = '';

    for (let i = 0; i < Math.ceil(this.arrayClips.length / 4); i += 1) {
      const dot = new SliderDot().getSliderDot();
      dot.innerHTML = `${i + 1}`;
      this.dotsLine.appendChild(dot);
      const slide = new ClipsLine().getClipsLine();

      if (!i) {
        for (let j = i * 4; j < (i * 4 + 4) && j < this.arrayClips.length; j += 1) {
          slide.appendChild(this.arrayClips[j].getClip());
          dot.classList.add('dot_active');
        }
        this.slider.replaceChild(slide, old);
      }

      dot.addEventListener('click', () => {
        console.log(this.arrayClips.length);
        this.slider.querySelector('.dot_active').classList.remove('dot_active');
        dot.classList.add('dot_active');
        const oldSlide = this.slider.querySelector('.clips-line');
        for (let j = i * 4; j < (i * 4 + 4) && j < this.arrayClips.length; j += 1) {
          slide.appendChild(this.arrayClips[j].getClip());
        }
        this.slider.replaceChild(slide, oldSlide);
      });
    }
  }
}
