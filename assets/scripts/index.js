const addbtn = document.getElementById('add');
const substractbtn = document.getElementById('substract');
const multiplybtn = document.getElementById('multiply');
const divisionbtn = document.getElementById('division');
const savebtn = document.getElementById('save_result');
const clearbtn = document.getElementById('clear_results');

let button = '';
let result;
let saved_results = [];

function show(){
    if (button == 'save') {
        savebtn.style.display='block';
    } else if (button == 'clear'){
        document.getElementById('clear_results').style.display='block';
    }
} 


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
    button='save';
    show();
}

function substract(num1,num2){
    validate();
    num1 = parseInt(document.getElementById('number1').value);
    num2 = parseInt(document.getElementById('number2').value);
    result = num1 - num2;
    document.getElementById('result').innerHTML = result;
    button='save';
    show();
}

function multiply(num1,num2){
    validate();
    num1 = parseInt(document.getElementById('number1').value);
    num2 = parseInt(document.getElementById('number2').value);
    result = num1 * num2;
    document.getElementById('result').innerHTML = result;
    button='save';
    show();
}

function division(num1,num2){
    validate();
    num1 = parseInt(document.getElementById('number1').value);
    num2 = parseInt(document.getElementById('number2').value);
    result = num1 / num2;
    document.getElementById('result').innerHTML = result;
    button='save';
    show();
}

function save_result(){
    saved_results.push(result)
    let text = '<ul>';
    for (x=0;x<saved_results.length;x++){
        text += "<li>" + saved_results[x] + "</li>";
    }
    text += "</ul>";
    document.getElementById('results').innerHTML=text;
    button = 'clear';
    show();
}


function clear(){
    document.getElementById('results').innerHTML='';
    saved_results.length=0;
}

addbtn.addEventListener('click',add);
substractbtn.addEventListener('click',substract);
multiplybtn.addEventListener('click',multiply);
divisionbtn.addEventListener('click',division);
savebtn.addEventListener('click',save_result);
clearbtn.addEventListener('click',clear);