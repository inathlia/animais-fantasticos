export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li'); // cada li da lista
  const tabContent = document.querySelectorAll('[data-tab="content"] section'); // cada section

  function activeTab(index) { // adiciona classe ativo quando elemento for selecionado
    tabContent.forEach((content) => {
      content.classList.remove('ativo'); // remove a classe ativo de todos os elementos
    });
    const direcao = tabContent[index].dataset.anime; // seleciona o valor do data-anime
    tabContent[index].classList.add('ativo', direcao);
  };

  if (tabContent.length && tabMenu.length) { // se o elemento existir
    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => activeTab(index)); // adiciona a função em cada section
    });
  };
}
