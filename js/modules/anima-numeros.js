export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe um elemento do dom com numero em seu texto
  // incrementa a partir de 0 ate o numero final
  static incrementarNumero(numero) {
    const total = +numero.innerText; // + para transformar string em numero
    const incremento = Math.floor(total / 100); // valor para aumentar a velocidade do incremento

    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random()); // random só pra deixar a animação mais orgânica
  }

  // ativa incrementar numero para cada numero selecionado
  // do dom
  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }

  // funcao que ocorre quando a mutacao ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // adiciona ao mutationobersver para verificar
  // auqnado a classe ativo é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation); // um objeto que observa um elemento especifico e, quando ele muda, ativa a função passada como argumento
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
