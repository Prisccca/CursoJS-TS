let varA = 'A'
let varB = 'B'
let varC = 'C'

let varAux
varAux = varA
varA = varB
varB = varC
varC = varAux

//outra resolução
//[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)