export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // move a tooltip com base em seus estilos
  // de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`; // define o top (css) com o valor do pageY(posição y do mouse);
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
      // +20 para que a caixa não fique exatamente em cima do mouse e não fique piscando enquanto movimenta o mouse
    }
  }

  // remove a tooltip e os eventos de
  // mousemove e mouseleave
  onMouseLeave(event) { // tem que ser esse nome!!!
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave); // para remover o event listener -> otimizar o codigo
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // cria a tooltip box e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label'); // pega o conteudo do atributo
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox); // adiciona a tooltip no fim do documento

    this.tooltipBox = tooltipBox;
  }

  // cria a tooltip e adiciona os eventos
  // de mousemove e mouseleave ao target
  onMouseOver(event) {
    // cria a tooltip box e coloca em uma propriedade
    this.criarTooltipBox(event.currentTarget);

    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave); // também é possivel passar objetos pelo addEventListener
  }

  // adiciona os eventos de mouseover
  // a cada tooltip
  addTootipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTootipsEvent();
    }

    return this;
  }
}
