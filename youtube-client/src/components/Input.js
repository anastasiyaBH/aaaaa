export default class Input {
  constructor() {
    this.input = document.createElement('input');
    this.input.className = 'search-box__input';
  }

  getInput() {
    return this.input;
  }
}
