export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    // pega o valor do data-semana/data-horario e transforma em um array pelo método .split
    // para transformar em números basta usar o .map e o objeto Number
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3; // horario de brasilia
  }

  estaAberto() {
    // verificar se o dia de hoje está dentro do array
    this.semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    // verificar se o horario atual está válido
    this.horarioAberto = this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1];

    return (this.semanaAberto && this.horarioAberto);
  }

  ativaAberto() {
    if (this.estaAberto()) this.funcionamento.classList.add(this.activeClass);
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dataAgora();
      this.ativaAberto();
    }
    return this;
  }
}
