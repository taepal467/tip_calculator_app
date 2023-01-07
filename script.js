//FORM
let form = document.getElementById('form');

//INPUTS
let billInput = document.getElementById('bill');
let numberOfPeopleInput = document.getElementsByClassName('numOfPeople-input')[0];
let customInput = document.getElementsByClassName("custom-input")[0];
let amountInput = document.getElementsByClassName('amount-input')[0];
let totalInput = document.getElementsByClassName('total-input')[0];

//BUTTONS
let fivePercent = document.getElementsByClassName('five')[0];
let tenPercent = document.getElementsByClassName('ten')[0];
let fifteenPercent = document.getElementsByClassName('fifteen')[0];
let twentyFivePercent = document.getElementsByClassName('twenty-five')[0];
let fiftyPercent = document.getElementsByClassName('fifty')[0];
let resetButton = document.getElementsByClassName('reset-button')[0];

//ERROR MESSAGE
let errorMessage = document.getElementsByClassName('error-message')[0];

function fivePercentTip() {
    let billAmount = billInput.value;
    let numberOfPeople = numberOfPeopleInput.value;
    let parsedBill = parseInt(billAmount);
    let parsedPercent = parseInt(fivePercent.value);
    let parsedPeople = parseInt(numberOfPeople);

    if (parsedPeople === 0) {
        errorMessage.style.display = 'inline';
    } else if (parsedPeople >= 1) {

        let tax = parsedPercent / 100;
    
        let tipCalculation = (parsedBill * (tax)) / parsedPeople;
        let total = (parsedBill + (parsedBill * tax)) / parsedPeople;

        amountInput.textContent = '$' + tipCalculation.toFixed(2);
        totalInput.textContent = '$' + total.toFixed(2);
        errorMessage.style.display = 'none';

    }
}

function tenPercentTip() {
    let billAmount = billInput.value;
    let numberOfPeople = numberOfPeopleInput.value;
    let parsedBill = parseInt(billAmount);
    let parsedPercent = parseInt(tenPercent.value);
    let parsedPeople = parseInt(numberOfPeople);

    if (parsedPeople === 0) {
        errorMessage.style.display = 'inline';
    } else if (parsedPeople >= 1) {

    let tax = parsedPercent / 100;
 
    let tipCalculation = (parsedBill * (tax)) / parsedPeople;
    let total = (parsedBill + (parsedBill * tax)) / parsedPeople;

    amountInput.textContent = '$' + tipCalculation.toFixed(2);
    totalInput.textContent = '$' + total.toFixed(2);
    errorMessage.style.display = 'none';
    }

}

function fifteenPercentTip() {
    let billAmount = billInput.value;
    let numberOfPeople = numberOfPeopleInput.value;
    let parsedBill = parseInt(billAmount);
    let parsedPercent = parseInt(fifteenPercent.value);
    let parsedPeople = parseInt(numberOfPeople);

    if (parsedPeople === 0 ) {
        errorMessage.style.display = 'inline';
    } else if (parsedPeople >= 1) {
        let tax = parsedPercent / 100;
 
        let tipCalculation = (parsedBill * (tax)) / parsedPeople;
        let total = (parsedBill + (parsedBill * tax)) / parsedPeople;
    
        amountInput.textContent = '$' + tipCalculation.toFixed(2);
        totalInput.textContent = '$' + total.toFixed(2);
        errorMessage.style.display = 'none';
    }

}

function twentyFivePercentTip() {
    let billAmount = billInput.value;
    let numberOfPeople = numberOfPeopleInput.value;
    let parsedBill = parseInt(billAmount);
    let parsedPercent = parseInt(twentyFivePercent.value);
    let parsedPeople = parseInt(numberOfPeople);

    if (parsedPeople === 0 ){
        errorMessage.style.display = 'inline';
    } else if (parsedPeople >= 1) {
        let tax = parsedPercent / 100;
 
        let tipCalculation = (parsedBill * (tax)) / parsedPeople;
        let total = (parsedBill + (parsedBill * tax)) / parsedPeople;
    
        amountInput.textContent = '$' + tipCalculation.toFixed(2);
        totalInput.textContent = '$' + total.toFixed(2);
        errorMessage.style.display = 'none';
    }
 
}

function fiftyPercentTip() {
    let billAmount = billInput.value;
    let numberOfPeople = numberOfPeopleInput.value;
    let parsedBill = parseInt(billAmount);
    let parsedPercent = parseInt(fiftyPercent.value);
    let parsedPeople = parseInt(numberOfPeople);

    if (parsedPeople === 0 ) {
        errorMessage.style.display = 'inline';
    } else if (parsedPeople >= 1 ) {
        let tax = parsedPercent / 100;
 
        let tipCalculation = (parsedBill * (tax)) / parsedPeople;
        let total = (parsedBill + (parsedBill * tax)) / parsedPeople;
    
        amountInput.textContent = '$' + tipCalculation.toFixed(2);
        totalInput.textContent = '$' + total.toFixed(2);
        errorMessage.style.display = 'none';
    }
 
}

function customTipPercent() {
    let customTip = customInput.value;
    let billAmount = billInput.value;
    let numberOfPeople = numberOfPeopleInput.value;
    let parsedBill = parseInt(billAmount);
    let parsedPercent = parseInt(customTip);
    let parsedPeople = parseInt(numberOfPeople);
    
    if(parsedPeople === 0 ) {
        errorMessage.style.display = 'inline';
    } else if (parsedPeople >= 1) {
        let tax = parsedPercent / 100;
 
        let tipCalculation = (parsedBill * (tax)) / parsedPeople;
        let total = (parsedBill + (parsedBill * tax)) / parsedPeople;
    
        amountInput.textContent = '$' + tipCalculation.toFixed(2);
        totalInput.textContent = '$' + total.toFixed(2);
        errorMessage.style.display = 'none';
    }

}

fivePercent.addEventListener('click', fivePercentTip);
tenPercent.addEventListener('click', tenPercentTip);
fifteenPercent.addEventListener('click', fifteenPercentTip);
twentyFivePercent.addEventListener('click', twentyFivePercentTip);
fiftyPercent.addEventListener('click', fiftyPercentTip);
customInput.addEventListener('input', customTipPercent);

resetButton.addEventListener('click', () => {
    amountInput.textContent = '$0.00';
    totalInput.textContent = '$0.00';
    billInput.value = "";
    customInput.value = "";
    numberOfPeopleInput.value="";
})



   
  







