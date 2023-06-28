import outsideEvent from './outside-event.js';

export default class DropdownMenu {
  constructor(dropdownMenus) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = 'active';
    this.events = ['touchstart', 'click'];
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.toggle(this.activeClass);

    outsideEvent(element, this.events, () => this.classList.remove('active')); // (elemento, eventos, função)
  }

  addDropdownsMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      // menu.addEventListener('click', handleClick);
      // menu.addEventListener('touchstart', handleClick);
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      }); // é a mesma coisa do que está comentado acima
    });
  }

  init() {
    if (this.dropdownMenus.length) this.addDropdownsMenusEvent();
    return this;
  }
}
