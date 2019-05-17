import Input from '../components/Input';

export default class SearchBox {
  constructor(url) {
    this.url = url;

    this.searchBox = document.createElement('form');
    this.searchBox.className = 'search-box';

    const inpt = new Input().getInput();
    this.searchBox.appendChild(inpt);

    this.searchBox.innerHTML += '<button class="search-box__search-button" type="submit" value=""><i class="fas fa-search"></i></input>';
  }

  getSearchBox() {
    return this.searchBox;
  }
}
