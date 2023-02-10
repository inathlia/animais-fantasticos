export default function initAnimaNumeros(){
    const observerTarget = document.querySelector('.numeros');
    const observer = new MutationObserver(handleMutation); //um objeto que observa um elemento especifico e, quando ele muda, ativa a função passada como argumento

    observer.observe(observerTarget, {attributes: true});

    function handleMutation(mutation){
        if(mutation[0].target.classList.contains('ativo')) {
            observer.disconnect();
            animaNumeros();
        }
    }
        
    function animaNumeros(){
        const numeros = document.querySelectorAll('[data-numero]');

        numeros.forEach((numero) => {
            const total = +numero.innerText; //+ para transformar string em numero
            const incremento = Math.floor(total / 100); //valor para aumentar a velocidade do incremento

            let start = 0;
            const timer = setInterval(() => {
                start += incremento;
                numero.innerText = start;
                if(start > total){
                    numero.innerText = total;
                    clearInterval(timer);
                }
            }, 25 * Math.random()); //random só pra deixar a animação mais orgânica
        });
    }
}