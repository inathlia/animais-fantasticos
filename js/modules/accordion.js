export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass); // adiciona a classe ao proximo elemento irmão (dd neste caso)
  };

  // adiciona os eventos aos accordions
  addAccordionEvent() {
    this.accordionList.forEach((item) => item.addEventListener('click', () => this.toggleAccordion(item)));
  }

  // iniciar funcao
  init() {
    if (this.accordionList.length) {
      this.addAccordionEvent();
    }
    return this;
  }
};
