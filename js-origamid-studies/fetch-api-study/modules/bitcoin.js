export default function initBTC(){
    const btcP = document.querySelector('.btc');

    function fetchBtc(){
        fetch(`https://blockchain.info/ticker`)
        .then(response => response.json()) //transforma a resposta em json
        .then(btcJson => {
            btcP.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ','); //coloca o valor da bitcoin BRL dentro do paragrafo
        })
    };

    //setInterval(fetchBtc, 1000 * 30); //atualiza a cada 30 segundos

    fetchBtc();
}