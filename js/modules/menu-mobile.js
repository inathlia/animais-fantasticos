import outisideEvent from './outside-event.js';

export default class initMenuMobile {
  constructor(menuButtons, menuList, eventos) {
    this.menuButton = document.querySelector(menuButtons);
    this.menuList = document.querySelector(menuList);
    if (eventos === undefined) this.eventos = ['click', 'touchstart'];
    else this.eventos = eventos;
    this.activeClass = 'active';

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);

    outisideEvent(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.eventos.forEach(() => this.menuButton.addEventListener('click', this.openMenu));
  }

  init() {
    if (this.menuButton && this.menuList) this.addMenuMobileEvents();
    return this;
  }
}
