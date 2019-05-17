import SearchBox from './containers/SearchBox';

export default class App {
  constructor(url) {
    this.url = url;
  }

  start() {
    this.url = 0;

    // создание main
    const main = document.createElement('main');
    main.className = 'main';
    main.innerHTML = 'main';
    document.body.appendChild(main);

    // добавление поля поиска
    const searchBox = new SearchBox(this.url);
    main.appendChild(searchBox.getSearchBox());
    // eslint-disable-next-line no-console
    console.log('Hello');
  }
}
