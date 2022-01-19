const themeChanger = document.querySelector(".dot-box");
const dot = document.querySelector(".dot");
let themeCounter = 1;
let htmlAnch = document.querySelector("html");
const outputArea = document.querySelector("#output");
let numberOne = null;
let numberTwo = null;
let numberGroup = document.getElementsByClassName("bttn-number");
let numberArray = Array.from(numberGroup);
let signGroup = document.getElementsByClassName("bttn-sign");
let signArray = Array.from(signGroup);
let currentSign = "";
const reg = new RegExp('^[0-9]+$');
const deleteChar = document.querySelector("#bttn-del");
const resetCalc = document.querySelector("#bttn-reset");
const dotBttn = document.querySelector("#bttn-dot");
const equalsSign = document.querySelector("#bttn-equals");
let calcGroup = document.getElementsByClassName("calc-bttn");
let calcArray = Array.from(calcGroup);
let wasDone = false;

signArray.forEach(e => {
    e.addEventListener('click', () => {
        if(currentSign == "") {
            currentSign = e.innerText;
            outputArea.innerText = "";
        } else if(numberTwo == null && currentSign != ""){
            currentSign = e.innerText;
        } 
    })
})

dotBttn.addEventListener('click', () => {
    dotting();
})

window.addEventListener('keydown', (e) => {
    if(e.key == "."){
        dotting();
    }
}) 

function dotting() {
    if(currentSign == "" && outputArea.innerText != "" && outputArea.innerText.length < 12 && !outputArea.innerText.includes(".")){
        outputArea.innerText += ".";
        numberOne += ".";
    } else if (currentSign != "" && outputArea.innerText != "" && outputArea.innerText.length < 12 && !outputArea.innerText.includes(".")){
        outputArea.innerText += ".";
        numberTwo += ".";
    }
}

resetCalc.addEventListener('click', () => {
    numberOne = null;
    numberTwo = null;
    currentSign = "";
    outputArea.innerText = "";
})

window.addEventListener('keydown', (e) => {
    if(currentSign == "" && e.key >=0 && e.key <=9 && outputArea.innerText.length < 12){
        outputArea.innerText += e.key;
        numberOne = outputArea.innerText;
    } else if (currentSign != "" && e.key >=0 && e.key <=9 && outputArea.innerText.length < 12){
        outputArea.innerText += e.key;
        numberTwo = outputArea.innerText;
    }
}) 

numberArray.forEach(p => {
    p.addEventListener('click', () => {
        if(currentSign == "" && reg.test(p.innerText) == true && outputArea.innerText.length < 12){
            outputArea.innerText += p.innerText;
            numberOne = outputArea.innerText;
        } else if (currentSign != "" && reg.test(p.innerText) == true && outputArea.innerText.length < 12){
            outputArea.innerText += p.innerText;
            numberTwo = outputArea.innerText;
        }
    })
})

function deleting() {
    if(currentSign == "" && numberOne != null){
        numberOne = numberOne.slice(0, -1);
        outputArea.innerText = outputArea.innerText.slice(0, -1);
    } else if (currentSign != "" && numberTwo != null) {
        numberTwo = numberTwo.slice(0, -1);
        outputArea.innerText = outputArea.innerText.slice(0, -1);
    }
}

deleteChar.addEventListener('click', () => {
    deleting();
})

window.addEventListener('keydown', (e) => {
    if(e.key == "Backspace"){
        deleting();
    }
})

calcArray.forEach(e => {
    e.addEventListener('click', () => {
        if(wasDone){
            numberOne = null;
            numberTwo = null;
            currentSign = "";
            outputArea.innerText = "";
            wasDone = false;
        }
    })
})

equalsSign.addEventListener('click', () => {
    if(numberOne != null && numberTwo != null)
    {
    if(numberOne.charAt(numberOne.length - 1) == "."){
        numberOne = numberOne.slice(0, -1);
    }
    if(numberTwo.charAt(numberTwo.length - 1) == "."){
        numberTwo = numberTwo.slice(0, -1);
    }
    if(numberOne != null && numberTwo != null && currentSign != ""){
        switch(currentSign){
            case "+": {
                outputArea.innerText = Number(numberOne) + Number(numberTwo);
                if (outputArea.innerText.length > 12){
                    outputArea.innerText = (Number(numberOne) + Number(numberTwo)).toExponential(1);
                }
            };
            break;

            case "-": outputArea.innerText = Number(numberOne) - Number(numberTwo);
            break;
            
            case "x": {
                outputArea.innerText = Number(numberOne) * Number(numberTwo);
                if (outputArea.innerText.length > 12){
                    outputArea.innerText = (Number(numberOne) * Number(numberTwo)).toExponential(1);
                }
            };
            break;

            case "/": outputArea.innerText = Number(numberOne) / Number(numberTwo);
            break;
        }
        wasDone = true;
    }
}
})

themeChanger.addEventListener('click', () => {
    switch(themeCounter)
    {
        case 1: {
            themeCounter = 2;
            dot.classList.add("dotTwo");
            dot.classList.remove("dotThree");
            htmlAnch.setAttribute("data-theme", "two");
            break;
        }
        case 2: {
            themeCounter = 3;
            dot.classList.add("dotThree");
            dot.classList.remove("dotTwo");
            htmlAnch.setAttribute("data-theme", "three");
            break;
        }
        case 3: {
            themeCounter = 1;
            dot.classList.remove("dotThree");
            dot.classList.remove("dotTwo");
            htmlAnch.setAttribute("data-theme", "one");
            break;
        }
    }
})
