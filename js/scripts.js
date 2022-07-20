const priviousOperationText = document.querySelector("#previous-operation");
const currentOperationtext = document.querySelector ("#curret-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class calculator {
    constructor (priviousOperationText,currentOperationtext) {
    this.priviousOperationText = priviousOperationText
    this.currentOperationtext = currentOperationtext
    this.currentOperation = "";
    }

    
addDigit (digit) {
   
    this.currentOperation = digit;
    this.updatescreen(); 
}

updatescreen () {
    this.currentOperationtext.innerText += this.currentOperation;
 }
}

const  calc = new calculator (priviousOperationText,currentOperationtext);

buttons.forEach((btn) => { 
    btn.addEventListener("click", (e) => {
const value = e.target.innerText;

if(+value >= 0 || value === ".") {  
console.log(value);
} else {
    console.log("op: " + value);
}
 });
}); 