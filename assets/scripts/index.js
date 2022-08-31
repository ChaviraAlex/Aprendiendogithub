const addbtn = document.getElementById('add');
const substractbtn = document.getElementById('substract');
const multiplybtn = document.getElementById('multiply');
const divisionbtn = document.getElementById('division');


let result;

function validate(){
    if (document.getElementById('number1').value == '' || document.getElementById('number2').value == ''){
    alert('You must enter data in both inputs')
    return false
    }
}

function add(num1,num2){
    validate();
    num1 = parseInt(document.getElementById('number1').value);
    num2 = parseInt(document.getElementById('number2').value);
    result = num1 + num2;
    document.getElementById('result').innerHTML = result;
}

function substract(num1,num2){
    validate();
    num1 = parseInt(document.getElementById('number1').value);
    num2 = parseInt(document.getElementById('number2').value);
    result = num1 - num2;
    document.getElementById('result').innerHTML = result;
}

function multiply(num1,num2){
    validate();
    num1 = parseInt(document.getElementById('number1').value);
    num2 = parseInt(document.getElementById('number2').value);
    result = num1 * num2;
    document.getElementById('result').innerHTML = result;
}

function division(num1,num2){
    validate();
    num1 = parseInt(document.getElementById('number1').value);
    num2 = parseInt(document.getElementById('number2').value);
    result = num1 / num2;
    document.getElementById('result').innerHTML = result;
}

addbtn.addEventListener('click',add);
substractbtn.addEventListener('click',substract);
multiplybtn.addEventListener('click',multiply);
divisionbtn.addEventListener('click',division);