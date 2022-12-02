import colecao_signos from './dados/dados.js'
import retorna_signo from './funcoes/funcoes.js'

let data_app = new Date();

let ano = data_app.getFullYear();
let mes = data_app.getMonth();
let dia = data_app.getDay();

const nome_signo = retorna_signo(colecao_signos, data_app);

console.log("O signo de hoje é: " + nome_signo + ' - ' + dia + '/' + mes + '/' + ano);