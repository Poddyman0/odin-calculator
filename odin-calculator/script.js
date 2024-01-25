

document.addEventListener('DOMContentLoaded', function(event) {   
    let numbers = document.querySelectorAll(".number")
    let operators = document.querySelectorAll(".operator")
    let currentNumDisplay = document.getElementById('currentOperationScreen')   
    let pastNumDisplay = document.getElementById('lastOperationScreen')

    getNumber(numbers, currentNumDisplay)
    handleOperator(operators, pastNumDisplay, currentNumDisplay)
    clearNumber(currentNumDisplay)
    deleteNumber(currentNumDisplay, pastNumDisplay)
    handleEquals(pastNumDisplay, currentNumDisplay)
})

function getNumber(numbers, currentNumDisplay) {
    numbers.forEach((number) => number.addEventListener('click', function(event) {
        const numberToPrint = event.target.textContent
        currentNumDisplay.append(numberToPrint)
    }))
}

function clearNumber(currentNumDisplay) {
    document.querySelector('#clearBtn').addEventListener('click', function() {
        currentNumDisplay.innerText = "";
        })
}

function handleOperator(operators, pastNumDisplay, currentNumDisplay) {
    operators.forEach((operator) => operator.addEventListener('click', function(event) {
        const operandToDisplay = event.target.textContent
        pastNumDisplay.innerText = ""
        pastNumDisplay.append(currentNumDisplay.innerText + operandToDisplay)
        currentNumDisplay.innerText = "";
    }))
}


function handleEquals(pastNumDisplay, currentNumDisplay) {
    document.querySelector('.equalsBtn').addEventListener('click', function(event) {
        if (pastNumDisplay.innerText.includes("÷")) {
            const regexPattern = /\d+(\.\d+)?/g;
            const numbersArray = pastNumDisplay.innerText.match(regexPattern);
            const firstNumberString = numbersArray.map(Number);
            console.log(firstNumberString)
            let firstNumberAsNum = Number(firstNumberString)
            let secondNumberAsNum = Number(currentNumDisplay.innerText)
            console.log("one", firstNumberAsNum, "two",secondNumberAsNum)
            let answer = firstNumberAsNum / secondNumberAsNum
            pastNumDisplay.append(currentNumDisplay.innerText + `=${answer}`)
            currentNumDisplay.innerText = ""

        } else if (pastNumDisplay.innerText.includes("×")) {
            const regexPattern = /(\d+(\.\d+)?)(?=\s*×)/g;
            const numbersArray = pastNumDisplay.innerText.match(regexPattern);
            const firstNumberString = numbersArray.map(Number);
            console.log(firstNumberString)
            let firstNumberAsNum = Number(firstNumberString)
            let secondNumberAsNum = Number(currentNumDisplay.innerText)
            console.log("one", firstNumberAsNum, "two",secondNumberAsNum)
            let answer = firstNumberAsNum * secondNumberAsNum
            pastNumDisplay.append(currentNumDisplay.innerText + `=${answer}`)
            currentNumDisplay.innerText = ""

        } else if (pastNumDisplay.innerText.includes("−")) {
            const regexPattern = /(\d+(\.\d+)?)(?=\s*−)/g
            const numbersArray = pastNumDisplay.innerText.match(regexPattern);
            const firstNumberString = numbersArray.map(Number);
            console.log(firstNumberString)
            let firstNumberAsNum = Number(firstNumberString)
            let secondNumberAsNum = Number(currentNumDisplay.innerText)
            console.log("one", firstNumberAsNum, "two",secondNumberAsNum)
            let answer = firstNumberAsNum - secondNumberAsNum
            pastNumDisplay.append(currentNumDisplay.innerText + `=${answer}`)
            currentNumDisplay.innerText = ""

        } else if (pastNumDisplay.innerText.includes("+")) {
            const regexPattern = /(\d+(\.\d+)?)(?=\s*\+)/g;
            const numbersArray = pastNumDisplay.innerText.match(regexPattern);
            const firstNumberString = numbersArray.map(Number);
            console.log(firstNumberString)
            let firstNumberAsNum = Number(firstNumberString)
            let secondNumberAsNum = Number(currentNumDisplay.innerText)
            console.log("one", firstNumberAsNum, "two",secondNumberAsNum)
            let answer = firstNumberAsNum + secondNumberAsNum
            pastNumDisplay.append(currentNumDisplay.innerText + `=${answer}`)
            currentNumDisplay.innerText = ""
        }
    })
}

function deleteNumber(currentNumDisplay, pastNumDisplay) {
    document.querySelector('#deleteBtn').addEventListener('click', function() {
        currentNumDisplay.innerText = "";
        pastNumDisplay.innerText = "";
        })
}





