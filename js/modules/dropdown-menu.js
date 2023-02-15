import outsideEvent from './outside-event.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle('active');

    outsideEvent(this, ['touchstart', 'click'], () => this.classList.remove('active')); // (elemento, eventos, função)
  }

  dropdownMenus.forEach((menu) => {
    // menu.addEventListener('click', handleClick);
    // menu.addEventListener('touchstart', handleClick);

    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    }); // é a mesma coisa do que está comentado acima
  });
}
