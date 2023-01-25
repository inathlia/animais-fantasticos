export default function initCep(){
    const inputCep = document.querySelector('#cep');
    const btnCep = document.querySelector('#btnCep');
    const resultadoCep = document.querySelector('.resultadoCep');

    btnCep.addEventListener('click', handleClick);

    function handleClick(e){
        e.preventDefault();

        const cep = inputCep.value;
        buscaCep(cep);
    };

    function buscaCep(cep){
        fetch(`https://viacep.com.br/ws/${cep}/json/`) //faz o fetch da api com o cep
        .then(response => response.text()) //transforma a resposta em texto
        .then(body => {
            resultadoCep.innerHTML = body; //coloca o resultado dentro do html
        })
    };
};