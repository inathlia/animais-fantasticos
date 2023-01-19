import outsideClick from "./outsideclick.js";

export default function initDropdownMenu(){
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');
    
    dropdownMenus.forEach((menu) => {
        // menu.addEventListener('click', handleClick);
        // menu.addEventListener('touchstart', handleClick);
    
        ['touchstart', 'click'].forEach((userEvent) => {
            menu.addEventListener(userEvent, handleClick)
        }); //é a mesma coisa do que está comentado acima
    });
    
    function handleClick(event){
        event.preventDefault();
        this.classList.toggle('active');
    
        outsideClick(this, ['touchstart', 'click'], () => this.classList.remove('active')) //(elemento, eventos, função)
    }
}