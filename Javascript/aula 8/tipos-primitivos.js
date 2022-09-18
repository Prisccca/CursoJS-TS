//Strings
const nome1 = 'Luiz'
const nome2 = "Luiz"
const nome = `Luiz`

//Numbers 
const num1 = 10 //int
const num2 = 10.52 //float

//undefined
let nomeAluno //não aponta para lugar na memória pois nao tem valor atrelado a ela

//null objeto
const sobrenomeAluno = null; //intencionalmente nao aponta para nenhum local de memória

//booleano = valor lógico
const aprovado = true
const reprovado = false

//impressão de tipo e valor

console.log(typeof nome, nome)
console.log(typeof num1, num1)
console.log(typeof nomeAluno, nomeAluno)
console.log(typeof sobrenomeAluno, sobrenomeAluno)
console.log(typeof aprovado, aprovado)

//variaveis por referência

const a = [1, 2]
const b = a
console.log(a, b)
b.push(3)
console.log(a, b)

//outras 
let c = 2
const d = c
console.log(c, d)
c = 3
console.log(c)