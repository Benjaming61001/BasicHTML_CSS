const numbers = document.querySelectorAll('.numbers')
const result = document.querySelector('.result span')
const signs = document.querySelectorAll('.signs')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const negative = document.querySelector('.negative')
const percent = document.querySelector('.percent')

let inputValue = ''
let firstValue = 0
let isFirstValue = false
let secondValue = ''
let isSecondValue = false
let sign = ''
let resultValue = ''

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', (e) => {
    let atr = e.target.getAttribute('value')
    if (isFirstValue === false) {
      getFirstValue(atr)
    }
    if (isSecondValue == false) {
      getSecondValue(atr)
    }
  })
}

function getFirstValue(el) {
  result.innerHTML = ''
  if (firstValue == 0) {
    firstValue = el
  } else {
    firstValue += el
  }
  result.innerHTML = firstValue
  firstValue = +firstValue
  inputValue = firstValue
}

function getSecondValue(el) {
  if (firstValue != '' && sign != '') {
    if (secondValue == 0) {
      secondValue = el
    } else {
      secondValue += el
    }
    result.innerHTML = secondValue
    secondValue = +secondValue
    inputValue = secondValue
  }
}

function getSign() {
  for (let i = 0; i < signs.length; i++) {
    signs[i].addEventListener('click', (e) => {
      if (secondValue != '') {
        equal()
      }

      sign = e.target.getAttribute('value')
      isFirstValue = true
      secondValue = ''

      console.log(firstValue)
      console.log(sign)
    })
  }
}
getSign()

function equal() {
  if (firstValue == 0) {
    if (sign == '' && inputValue == '') {
      console.log('equal zero')
      return
    }
  }
  result.innerHTML = ''
  if (secondValue == '') {
    secondValue = inputValue
  }
  if (sign === '+') {
    resultValue = firstValue + secondValue
  } else if (sign === '-') {
    resultValue = firstValue - secondValue
  } else if (sign === 'x') {
    resultValue = firstValue * secondValue
  } else if (sign === '/') {
    resultValue = firstValue / secondValue
  } else {
    resultValue = firstValue
  }

  console.log(inputValue)
  console.log('=')
  console.log(resultValue)

  if (resultValue == 0) {
    reset()
  }

  result.innerHTML = resultValue
  firstValue = resultValue
  isFirstValue = true
  secondValue = ''

  checkResultLength()
}

equals.addEventListener('click', () => {
  equal()
})

function checkResultLength() {
  resultValue = JSON.stringify(resultValue)

  if (resultValue.length >= 8) {
    resultValue = JSON.parse(resultValue)
    result.innerHTML = resultValue.toFixed(5)
  }
}

negative.addEventListener('click', () => {
  result.innerHTML = ''
  if (firstValue != '') {
    resultValue = -firstValue
    firstValue = resultValue
  }

  if (firstValue != '' && secondValue != '' && sign != '') {
    resultValue = -resultValue
  }

  result.innerHTML = resultValue
})

percent.addEventListener('click', () => {
  result.innerHTML = ''
  if (firstValue != '') {
    resultValue = firstValue / 100
    firstValue = resultValue
  }

  if (firstValue != '' && secondValue != '' && sign != '') {
    resultValue = resultValue / 100
  }

  result.innerHTML = resultValue

  console.log(resultValue)
})

function reset() {
  result.innerHTML = 0

  secondValue = ''
  isSecondValue = false
  resultValue = 0

  console.log('clear')
}

clear.addEventListener('click', () => {
  inputValue = ''
  firstValue = ''
  isFirstValue = false
  sign = ''
  reset()
})
