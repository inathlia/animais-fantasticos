export default function fetchBitcoin(url, target) {
  async function fetch() {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJSON = await bitcoinResponse.json();
      const btcPreco = document.querySelector(target);

      btcPreco.innerText = (1000 / bitcoinJSON.BRL.sell).toFixed(2);
    } catch (e) {
      console.log(Error(e));
    }
  }

  return fetch();
}
