export default function initChuck(){
    const btnProxima = document.querySelector('.proxima');
    const paragrafoPiada = document.querySelector('.piada');

    function puxarPiada(){
        fetch(`https://api.chucknorris.io/jokes/random`)
        .then(response => response.json())
        .then(piada => {
            paragrafoPiada.innerText = piada.value;
        })
    }

    btnProxima.addEventListener('click', puxarPiada);
}

