function getPin(){
    const pin = generatePin ();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin (){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const  pin = getPin();
    const displayField = document.getElementById('display-pin');
    displayField.value = pin
});

document.getElementById('calculetor').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-numbers');
    const previousNumber = typeNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = '';
        }
        else if (number ==='<'){
            const digits = previousNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }
    else{
       
        const newTypeNumber = previousNumber + number;
        typeNumberField.value = newTypeNumber;
    }
});

document.getElementById('submit-btn').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('typed-numbers');
    const typeNumber = typeNumberField.value;

    const pinSuccessMessage = document.getElementById('notify-success');
    const pinFailMessage = document.getElementById('notify-wrong');

    if(typeNumber === currentPin){
       
        pinSuccessMessage.style.display = 'block'
        pinFailMessage.style.display = 'none'

    }
    else{
       
        pinFailMessage.style.display = 'block'
        pinSuccessMessage.style.display = 'none'
    }

})