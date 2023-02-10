import outisideEvent from './outside-event.js';

export default function initMenuMobile(){
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const eventos = ['click', 'touchstart'];
    
    function openMenu(event){
        menuList.classList.add('active');
        menuButton.classList.add('active');

        outisideEvent(menuList, eventos, () => {
            menuList.classList.remove('active');
            menuButton.classList.remove('active');
        });
    }
    
    eventos.forEach(() => menuButton.addEventListener('click', openMenu));
}