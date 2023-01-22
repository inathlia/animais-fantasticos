const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChange);

const handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  },
}

function handleChange(event){
  const name = event.target.name; //pega o nome (name) do input selecionado
  const value = event.target.value; //pega o valor do input selecionado
  
  handleStyle[name](value); //handleStyle.name(value) -> quando name for uma variavel
  saveValues(name, value);
  showCss();
}

function saveValues(name, value){
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys(localStorage); //retorna um array com todas as chaves do localStorage
  properties.forEach(propertie => {
    handleStyle[propertie](localStorage[propertie]); //para alterar o formulario e chamar a funcao
    controles.elements[propertie].value = localStorage[propertie]; //busca o valor armazenado no localStorage e coloca no botao
  });
  showCss();
}

setValues();

function showCss(){
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
  //cssText e uma propriedade do elemento html
}