/* eslint-disable no-console */
import SearchBox from './containers/SearchBox';
import Slider from './containers/Slider';
import loadClipInform from './api/api';
// import Clip from './components/Clip';

export default class App {
  constructor() {
    this.main = document.createElement('main');
    this.main.className = 'main';
    document.body.appendChild(this.main);
  }

  start() {
    const searchBox = new SearchBox().getSearchBox();
    this.main.appendChild(searchBox);
    const slider = new Slider();

    searchBox.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        // const clips = [];
        loadClipInform(searchBox.querySelector('.search-box__input').value)
          .then((arr) => {
            console.log(arr);
          });
      }
    });

    this.main.appendChild(slider.getSlider());
  }
}
