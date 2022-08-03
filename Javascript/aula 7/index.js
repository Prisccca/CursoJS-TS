const nome = "Priscilla"
const sobrenome = "Falcão"
const idade = 33
const peso = 82
const altura = 1.67
let IMC;
let anoDeNAscimento;

IMC = peso / (altura * altura);
anoDeNAscimento = 2022 - idade;

console.log(nome, sobrenome, ' tem ', idade, 'anos, pesa ', peso, 'kg.')
console.log('Tem', altura, 'de altura e seu IMC é de ', IMC)
console.log(nome, sobrenome, ' nasceu em ', anoDeNAscimento)

//template strings ${} entre crases

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa  ${peso} kg.`)
console.log(`Tem ${altura} de altura e seu IMC é de ${IMC}.`)
console.log(`${nome} ${sobrenome} nasceu em  ${anoDeNAscimento}.`)
