//****Element Selectors****//
const tipBtn = document.querySelectorAll('.btn');

const billField = document.getElementById('bill-field');

const personField = document.getElementById('person-field');

const errorMsg = document.querySelector('.error-msg');

const resetBtn = document.getElementById('reset-btn');

const customInput = document.getElementById('custom-field');

const setPercentValue = document.getElementById('percent-value');

const setTotalPersonTip = document.getElementById('total-person-tip');


//****Event Listener for the buttons using forEach****//

tipBtn.forEach(btn => {
  btn.addEventListener('click', calculateTip)
});

//****Function for calculating tip and displaying the result if the person input is greater than 0***//
function calculateTip(e){
  
  const bill = Number(billField.value);
  const person = Number(personField.value);

if (personField.value >= 1){
    amount();
    
    totalAmount();
    
    clearErrorMsg();
}else{
  
  displayErrorMsg();
  
}

//****Function for the amount calculator****//

  function amount (){
  const calculateAmount = bill * parseFloat(e.currentTarget.textContent) / 100;
  setPercentValue.textContent = '$' + calculateAmount.toFixed(2);
}

//**** Function for total amount****//

function totalAmount (){
  const total = (bill * parseFloat(e.currentTarget.textContent) / 100) * person
  
  setTotalPersonTip.textContent = '$' + total.toFixed(2);
}

}



//*** Function for the display error message***//

function displayErrorMsg(){
  personField.classList.add('display');
  errorMsg.classList.add('display');
}

//***Function for the clear error message***// 
function clearErrorMsg() {
  personField.classList.remove('display');
  errorMsg.classList.remove('display');
}


resetBtn.addEventListener('click', reset);


//***Function for the reset button***//
function reset(e){
  e.preventDefault();
  billField.value = "";
  personField.value = "";
  customInput.value = "";
  setPercentValue.textContent = '$0.0';
  setTotalPersonTip.textContent = '$0.0';
  
  if (personField.classList.contains('display')){
    clearErrorMsg();
  }
}

//***Event Listener for the custom field***//
customInput.addEventListener('input', function (){
  
  const customValue = Number(customInput.value);
  
  const customAmount = Number(billField.value) * customValue / 100;
  
  setPercentValue.textContent = '$' + customAmount.toFixed(2);

  const customPerson = customAmount * Number(personField.value);
  
  setTotalPersonTip.textContent = '$' + customPerson.toFixed(2);
  
})
