const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) =>{
        console.log(event.target.value);
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) =>{
    calculatorScreen.value = number
}

let prevNumber = ''
let calculatorOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    }else{
        currentNumber += number
    }
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.value)
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ''
if (calculationOperator === ''){
    prevNumber = currentNumber
}
    calculatorOperator = operator
    currentNumber = '0'
}
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
    console.log('equal button is pressed')
})

const calculate = () => {
    let result = ''
        switch (calculationOperator) {
            case "+":
                result = parseFloat (prevNumber) + parseFloat (currentNumber)
                break
            case "-":
                result = prevNumber - currentNumber
                break
            case "*":
                result = prevNumber * currentNumber
                break
            case "/":
                result = prevNumber / currentNumber
                break
            default:
                return
        }
        currentNumber = result
        calculationOperator = ''
    }

// const equalSign = document.querySelector('.equal-sign')

// equalSign.addEventListener('click', () => {
//     calculate()
//     updateScreen(currentNumber)
// })

// const calculate = () => {
//     let result = ''
//     switch(calculatorOprator){
//         case '+':
//         result = parseInt(prevNumber) + parseInt(currentNumber)
//         break


const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
    console.log("acklik")
})


const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0' 
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal (event.target.value)
    updateScreen (currentNumber)
    console.log(event.target.value)
})

inputDecimal = (dot) => {
    currentNumber += dot
}

// const operators = document.querySelectorAll("operator")

// operators.forEach((operator) => {
//     operator.addEventListener("click", (event) => {
//         console.log(event.target.value)
//         inputOperator(event.target.value)
//     })
// })  

// const inputOperator = (operator) => {
//     prevNumber = currentNumber
//     calculationOperator = operator
//     currentNumber = ''
// }
// if (calculationOperator === ''){
//     prevNumber = currentNumber
// }
//     calculatorOperator = operator
//     currentNumber = '0'
// }

// const inputOperator = (operator) => {
// if (calculationOperator === ''){
// prevNumber = currentNumber
// }
// calculatorOperator = operator
// currentNumber = '0'
// }