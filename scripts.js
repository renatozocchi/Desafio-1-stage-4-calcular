//Frase de apresentação do programa
alert(`--Desafio explorer stage 4 - número 1--
Neste desafio vou te pedir dois números, e irei fazer diversos calculos com eles
Então bora la?`)

//Pedir número para User
const numberOne = Number(prompt("Digite o primeiro número").replace(",", "."))
const numberTwo = Number(prompt("Digite o segundo número número").replace(",", "."))

//função criada para verificar se é realmente um número que foi digitado, se não for aparecera um erro
function checkNumber(){
  try {
    if (isNaN(numberOne) || isNaN(numberTwo))
    throw("Este Não é um valor númerico");
    return true
  }
  catch (e) {
    alert("Error:..." + e)
  }
}

// função criada para saber se o número é par ou impar
function evenOrOdd(){
  let sumNumer = numberOne + numberTwo
  if (sumNumer % 2 === 0) {
    return "A soma dos números é Par"
  } else {
    return "A soma dos número é impar"
  }
}

// função para saber se os número são iguais
function numberEquals() {
  if (numberOne == numberTwo) {
    return "Os números inseridos são iguais"
  }  else {
    return "Os números inseridos são diferentes"
  }
}

//Somente um número depois da casa decimal e trocar pontos por ,
const sums = (numberOne + numberTwo).toFixed(1).replace(".", ",")
const subtraction = (numberOne - numberTwo).toFixed(1).replace(".", ",")
const multiplication = (numberOne * numberTwo).toFixed(1).replace(".", ",")
const division = (numberOne / numberTwo).toFixed(1).replace(".", ",")
const restDivision = (numberOne % numberTwo).toFixed(1).replace(".", ",")


//Variáveis para fazerem os calculos matematicos 
const sum = (`A soma dos números é: ${sums}`)
const sub = (`A subtração dos números é: ${subtraction}`)
const mult = (`A multiplicação dos números é: ${multiplication}`)
const div = (`A divisão dos números é: ${division}`)
const rest = (`O resto da fivisão dos números é: ${restDivision}`)
const even = evenOrOdd()
const equals = numberEquals()

// Array com as variáveis que devem ser exibidas
const printResult = [sum, sub, mult, div, rest, even, equals]

// Para ele só chamar 
if (checkNumber() == true) {
  //For of para exibir todos os calculos que foram colocados dentro de um Array
  for(let print of printResult) {
    alert(print)
} 
}


