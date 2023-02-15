export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');

  function activeAccordion() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo'); // adiciona a classe ao proximo elemento irmão (dd neste caso)
  };

  if (accordionList.length) {
    accordionList.forEach((item) => item.addEventListener('click', activeAccordion));
  };
};
