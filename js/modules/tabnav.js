export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu); // cada li da lista
    this.tabContent = document.querySelectorAll(content); // cada section
    this.activeClass = 'ativo';
  }

  activeTab(index) { // adiciona classe ativo quando elemento for selecionado
    this.tabContent.forEach((content) => {
      content.classList.remove(this.activeClass); // remove a classe ativo de todos os elementos
    });
    const direcao = this.tabContent[index].dataset.anime; // seleciona o valor do data-anime
    this.tabContent[index].classList.add(this.activeClass, direcao);
  };

  // adiciona eventos nas tabs
  addTabnavEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => this.activeTab(index)); // adiciona a função em cada section
    });
  }

  init() {
    if (this.tabContent.length && this.tabMenu.length) { // se o elemento existir
      this.addTabnavEvent();
    };
    return this;
  }
}
