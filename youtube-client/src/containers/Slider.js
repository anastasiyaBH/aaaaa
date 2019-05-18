/* eslint-disable no-console */
import ClipsLine from './ClipsLine';
import SliderDot from '../components/SliderDot';

export default class Slider {
  constructor() {
    this.slider = document.createElement('div');
    this.slider.className = 'slider';

    this.arrayClips = [];
    this.arrayClipsSlide = [];
    this.arrayDots = [];

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
    this.arrayClips = this.arrayClips.concat(arrayClips);
    console.log(this.arrayClips);
  }

  setSlider() {
    for (let i = 0; i < 4; i += 1) {
      const dot = new SliderDot(i).getSliderDot();
      this.dotsLine.appendChild(dot);
      const slide = new ClipsLine().getClipsLine();

      dot.addEventListener('click', () => {
        console.log(this.arrayClips.length);
        const oldSlide = this.slider.querySelector('.clips-line');
        for (let j = i * 4; j < (i * 4 + 4) && j < this.arrayClips.length; j += 1) {
          slide.appendChild(this.arrayClips[j].getClip());
        }
        this.slider.replaceChild(slide, oldSlide);
      });
    }
  }
}
