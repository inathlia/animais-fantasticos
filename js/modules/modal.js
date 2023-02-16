export default class initModal {
  constructor(abrir, fechar, modal) {
    this.abrirBotao = document.querySelector(abrir);
    this.fecharBotao = document.querySelector(fechar);
    this.modal = document.querySelector(modal);
    this.activeClass = 'ativo';

    // bind this ao callback para
    // fazer referencia ao objeto
    // da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  };

  // abre ou fecha o modal
  toggleModal() {
    this.modal.classList.toggle(this.activeClass);
  };

  // adiciona o evento do toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  };

  // fecha o modal ao clicar do lado de fora
  cliqueForaModal(event) {
    if (event.target === this.modal) this.toggleModal(event);
    // verifica se o elemento clicado é exatamente igual ao objeto ('[data-modal="container"]')
  };

  // adiciona os eventos aos elementos do modal
  addModalEvent() {
    this.abrirBotao.addEventListener('click', this.eventToggleModal);
    this.fecharBotao.addEventListener('click', this.eventToggleModal);
    this.modal.addEventListener('click', this.cliqueForaModal);
  };

  init() {
    if (this.abrirBotao && this.fecharBotao && this.modal) {
      this.addModalEvent();
    }
    return this;
  };
}
