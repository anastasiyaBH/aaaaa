import ClipsLine from './ClipsLine';
import SliderDot from '../components/SliderDot';

export default class Slider {
  constructor() {
    this.slider = document.createElement('div');
    this.slider.className = 'slider';

    this.clipsLine = new ClipsLine().getClipsLine();
    this.slider.appendChild(this.clipsLine);

    this.dotsLine = document.createElement('div');
    this.dotsLine.className = 'dots-line';

    for (let i = 0; i < 4; i += 1) {
      const dot = new SliderDot();
      if (!i) dot.setActiveDot();
      this.dotsLine.appendChild(dot.getSliderDot());
    }
    this.slider.appendChild(this.dotsLine);
  }

  getSlider() {
    return this.slider;
  }

  addClips(arrayClips) {
    arrayClips.forEach((element) => {
      // eslint-disable-next-line no-console
      console.log(element.getClip());
      this.clipsLine.appendChild(element.getClip());
    });
  }
}
