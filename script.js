const buttons = document.querySelectorAll('.btn');
const calculatorScreen = document.querySelector("[data-calc-screen]");
const equalButton = document.querySelector('.btn-equal');
const clearButton = document.querySelector('.btn-clear');


for (let i = 0; i < buttons.length; i++ ) {
    buttons[i].addEventListener('click', function(){
        let number = buttons[i].getAttribute('data-num');
        calculatorScreen.value += number;
    })
}

equalButton.addEventListener('click', function(){

    if(calculatorScreen.value === '') {
        calculatorScreen.value = '';
    }
    else{
    let value = eval(calculatorScreen.value);
    calculatorScreen.value = value;
    }
});

clearButton.addEventListener('click', function(){
    calculatorScreen.value = '';
});