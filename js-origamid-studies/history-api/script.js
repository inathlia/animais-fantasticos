//window.history.pushState(null, null, 'teste.html'); //"coloque algo no estado do history"
//popstate -> evento de quando o usuario clica nos botôes de voltar e próximo do navegador

//evitar recarregar toda vez que mudar de pagina

const links = document.querySelectorAll('a');

links.forEach(link => link.addEventListener('click', handleClick));

function handleClick(e){
    e.preventDefault();
    fetchPage(e.target.href); //pega a url do link clicado
    window.history.pushState(null, null, e.target.href); //muda a url pro link clicado
}

async function fetchPage(url){
    document.querySelectorAll('.content').innerHTML = 'Carregando'; //adiciona uma mensagem de carregamento enquanto espera a promessa

    const pageResponse = await fetch(url);
    const pageText = await pageResponse.text(); //transforma o conteudo em texto
    
    replaceContent(pageText);
}

function replaceContent(newText){
    const newHtml = document.createElement('div');
    newHtml.innerHTML = newText; //coloca o texto dentro da div criada
    
    const oldContent = document.querySelector('.content');
    const newContent = newHtml.querySelector('.content'); //seleciona a div content do newHtml

    oldContent.innerHTML = newContent.innerHTML; //subistitui o conteudo
    document.title = newHtml.querySelector('title').innerText; //seleciona o texto da tag title
}

window.addEventListener('popstate', () => { //para colcoar o conteudo de acordo com a url da pagina
    const url = window.location.href;
    fetchPage(url);
})