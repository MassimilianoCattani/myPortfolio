function compute(a, b, c){
   
    switch(b){
        case '+':
            a = a + c;
        break;
        case '-':
            a = a - c;
        break;
        case 'x':
            a = a * c;
        break;
        case '÷':
            a = a / c;
        break;
        case '%':
            a = a % c;
        break;
        case '=':
            a = a;
        break;
        default:
            return;
    }
    return a;
}
function updateScroll(element){
    element.scrollTop = element.scrollHeight;
}
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const clearAll = document.querySelector('.clear-all');
const clearLast = document.querySelector('.clear-last');
const current = document.getElementById('current');
const result = document.getElementById('result');
const history = document.getElementById('history');

let dot = false;
let operand1;
let operand2;
let operatorSign;
let arr = [];

number.forEach(button => {
    button.addEventListener('click', (e)=>{
        var x = history.innerText;        
        for(let i = 0; i < x.length; i++){
            arr.push(x[i]);
        }
        if(arr[arr.length - 1] === '\n'){
            return;
        }else{
            if(e.target.innerText === '.' && !dot){
                dot = true;
            }else if(e.target.innerText === '.' && dot){
                return;
            }
            current.innerText += e.target.innerText;
            e.preventDefault();
        }
    });
})

operator.forEach(button => {
    button.addEventListener('click', ()=>{
        dot = false;
        if(current.innerText === '')return;
        if(!result.innerText){
            result.innerText = parseFloat(current.innerText);
            history.innerText += result.innerText + button.innerText, current.innerText = '';
            operand1 = parseFloat(result.innerText);
            operatorSign = button.innerText;
        }else if(result.innerText){
            operand2 = parseFloat(current.innerText);
            result.innerText = compute (operand1, operatorSign, operand2);
            result.innerText = parseFloat(result.innerText).toFixed(5);
            history.innerText += operand2 + button.innerText;
            current.innerText = '';
            operand1 = parseFloat(result.innerText);
            operatorSign = button.innerText;
            operand2 = parseFloat(current.innerText);
            result.innerText = compute (operand1, operatorSign, operand2);
            result.innerText = operand1.toLocaleString('en');
            updateScroll(history);
            if(operatorSign === '='){
                history.innerText += '\n';
                operand2 = operand1;
                current.innerText = operand2;  
            }
        }     
    });
});
clearAll.addEventListener('click', ()=>{
    current.innerText = '';
    result.innerText = '';
    history.innerText = '';
    arr = [];
});
clearLast.addEventListener('click', ()=>{
    current.innerText = current.innerText.toString().slice(0,-1);
});