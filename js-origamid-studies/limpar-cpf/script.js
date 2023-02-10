const cpfs = document.querySelectorAll('.cpf li');
// [...cpfs]; //transforma em um array -> a mesma coisa que usar Array.from(cpfs)

const elementsInnerText = ([...elements]) => { //transformar a node list em um array apenas com os valores
    return elements.map(element => element.innerText); // map retorna um novo array
}

const limparCPF = (cpf) => {
    return cpf.replace(/\D/g, ''); // D -> tudo que não é digito
}

const construirCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

// const formatarCPFS = (cpfs) => {
//     return cpfs.map(element => construirCPF(limparCPF(element)));
// }

const formatarCPFS = (cpfs) => {
    return cpfs.map(limparCPF).map(construirCPF);
}

const substituiCPFS = (cpfs) => {
    const cpfsElements = elementsInnerText(cpfs)
    const cpfsFormatados = formatarCPFS(cpfsElements);
    
    cpfs.forEach((element, index) => {
        element.innerText = cpfsFormatados[index];
    });
}

substituiCPFS(cpfs);