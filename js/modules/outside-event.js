export default function outsideEvent(element, events, callback){
    const html = document.documentElement;
    const outside = 'data-outside';

    if(!element.hasAttribute(outside)){ //para evitar de adicionar varios eventos de uma vez
        events.forEach((userEvent) => {
            setTimeout(() => html.addEventListener(userEvent, handleOutsideClick)); //adiciona a função ao documento html
            //como o setTimeOut é assincrono, esse comando só vai acontecer depois que todo o processo de bubble terminar
        });
        element.setAttribute(outside, '');
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