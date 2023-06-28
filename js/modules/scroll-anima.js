export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.window60 = window.innerHeight * 0.6; // innerHeight pega o tamanho da tela do usuario

    this.checkDistance = this.checkDistance.bind(this);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => { // desestrutura a nodeList para transformar em array
      // altura da section na janela do usuário / altura do topo da section -> getBoundingClientRect().top
      const offset = section.offsetTop; // valor fixo da distancia entre a sessao e o topo
      return {
        element: section,
        offset: Math.floor(offset - this.window60),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
