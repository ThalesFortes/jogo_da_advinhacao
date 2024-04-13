//Váriaveis
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const inputNumber = document.querySelector('#inputNumber')
const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")

//Eventos
btnTry.addEventListener('click',handleTryClick)
btnAgain.addEventListener('click',handleResetClick)
document.addEventListener('keydown',handleResetEnter )

//Funções
function handleTryClick(event){
  event.preventDefault()
  if (Number(inputNumber.value) <= 10 && inputNumber.value != ''){
    if (Number(inputNumber.value) == randomNumber ){
      document.querySelector('.screen2 h2').innerText = `Acertou em ${xAttempts} tentativas!`
      toggleScreen()
    }
  } else {
    alert("Insira um numero entre 0 e 10")
    xAttempts --
  }
  inputNumber.value = ''
  xAttempts ++
}

function handleResetClick(){
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function  toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function handleResetEnter (e){
  if (e.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetClick()
  }
}

