export default function initModal(){
    const abrirBotao = document.querySelector('[data-modal="abrir"]');
    const fecharBotao = document.querySelector('[data-modal="fechar"]');
    const modal = document.querySelector('[data-modal="container"]');

    if(abrirBotao && fecharBotao && modal){
        function toggleModal(event) {
            event.preventDefault();
            modal.classList.toggle('ativo');
        };
        function fecharTela(event) {
            if(event.target === this) //verifica se o elemento clicado é exatamente igual ao objeto ('[data-modal="container"]')
             toggleModal(event);
        };

        abrirBotao.addEventListener('click', toggleModal);
        fecharBotao.addEventListener('click', toggleModal);
        modal.addEventListener('click', fecharTela);
    }
}