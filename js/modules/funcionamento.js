export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  // pega o valor do data-semana/data-horario e transforma em um array pelo método .split
  // para transformar em números basta usar o .map e o objeto Number
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  // verificar se o dia de hoje está dentro do array
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  // verificar se o horario atual está válido
  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  } else {
    funcionamento.classList.remove('aberto');
  }
}
