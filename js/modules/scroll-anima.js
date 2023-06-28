export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.window60 = window.innerHeight * 0.6; // innerHeight pega o tamanho da tela do usuario

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top; // altura da section na janela do usuário
      const isSectionVisible = sectionTop - this.window60 < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      }
    });
  };

  init() {
    this.animaScroll();
    window.addEventListener('scroll', this.animaScroll);
  }
}
