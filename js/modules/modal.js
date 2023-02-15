export default function initModal() {
  const abrirBotao = document.querySelector('[data-modal="abrir"]');
  const fecharBotao = document.querySelector('[data-modal="fechar"]');
  const modal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    modal.classList.toggle('ativo');
  };

  function fecharTela(event) {
    if (event.target === this) toggleModal(event);
    // verifica se o elemento clicado é exatamente igual ao objeto ('[data-modal="container"]')
  };

  if (abrirBotao && fecharBotao && modal) {
    abrirBotao.addEventListener('click', toggleModal);
    fecharBotao.addEventListener('click', toggleModal);
    modal.addEventListener('click', fecharTela);
  }
}
