export default function outsideClick(element, events, callback){
    const html = document.documentElement;
    const outside = 'data-outside';

    if(!element.hasAttribute(outside)){ //para evitar de adicionar varios eventos de uma vez
        events.forEach((userEvent) => {
            html.addEventListener(userEvent, handleOutsideClick); //adiciona a função ao documento html
        });
        element.setAttribute(outside);
    }

    function handleOutsideClick(event){
        if(!element.contains(event.target)){ //verifica se o elemento é o alvo do evento
            element.removeAttribute(outside);
            events.forEach((userEvent) => {
                html.removeEventListener(userEvent, handleOutsideClick);
            });
            callback(); //ativa o paramentro como uma função / chama a função passada por paramentro
        }
    }
}