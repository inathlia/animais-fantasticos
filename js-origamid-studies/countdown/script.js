import Coutdown from "./countdown.js";

const diasParaNatal = new Coutdown('24 December 2023 23:59:59 GMT-0300');

setInterval(() => console.log(diasParaNatal.total), 1000)