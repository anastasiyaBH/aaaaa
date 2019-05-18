import Input from '../components/Input';

export default class SearchBox {
  constructor() {
    this.searchBox = document.createElement('div');
    this.searchBox.className = 'search-box';

    const inpt = new Input().getInput();
    this.searchBox.appendChild(inpt);
    this.searchBox.innerHTML += '<button class="search-box__search-button" type="submit" value=""><i class="fas fa-search"></i></input>';
  }

  getSearchBox() {
    return this.searchBox;
  }
}
