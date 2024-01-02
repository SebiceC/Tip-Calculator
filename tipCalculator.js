const billAmountInput = document.getElementById('billAmount');
const tipPercentajeInput = document.getElementById('tipPercentage');
const peopleAmountInput = document.getElementById('peopleAmount');

calculateButton.addEventListener('click', calculateTip);

function calculateTip () {
    const billAmount = parseFloat(billAmountInput.value) || 0;
    const tipPercentage = parseInt(tipPercentajeInput.value);
    const amountOfPerson = parseInt(peopleAmountInput.value) || 0;

    if (!billAmountInput) {
        alert("Please enter all the fields");
    }
    if (!amountOfPerson){
        alert("Please enter all the fields");
    }
    if (!tipPercentajeInput) {
        alert("Please enter all the fields");
    }

    const tipAmount = (billAmount * tipPercentage) / 100;

    const totalWithTip = billAmount + tipAmount;
    const AmountPerPerson = totalWithTip / amountOfPerson;


    const tipAmountElement = document.getElementById('tipAmount');
    const totalAmountElement = document.getElementById('total');
    const totalPersonPayElement = document.getElementById('totalPersonPay');
    
    tipAmountElement.textContent = tipAmount;
    totalAmountElement.textContent = totalWithTip;
    totalPersonPayElement.textContent = AmountPerPerson;
}