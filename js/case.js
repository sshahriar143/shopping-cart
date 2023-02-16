/* Updated Function */

function updatedCaseNumber(isIncrease){
   const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const caseNumber =parseInt(caseNumberString) ;

    let newCaseNumber;

    if(isIncrease === true){
         newCaseNumber = caseNumber + 1;
    }
   else{
    newCaseNumber = caseNumber -1;
   }
   caseNumberField.value = newCaseNumber;
   return newCaseNumber;
}

function updatedCasePrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice; 
}

document.getElementById('btn-case-plus').addEventListener('click' , function(){
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberFieldString = caseNumberField.value;
//     const caseNumber =parseInt(caseNumberFieldString) ;
//     const newCaseNumber = caseNumber + 1;
//    caseNumberField.value = newCaseNumber;
    const newCaseNumber=updatedCaseNumber(true);
    // const caseTotalPrice = newCaseNumber * 59;
    // const caseTotalElement = document.getElementById('case-total');
    // caseTotalElement.innerText = caseTotalPrice;
    updatedCasePrice(newCaseNumber);
})

/* minus button */   
    document.getElementById('btn-case-minus').addEventListener('click' , function(){
    // const caseNumberField = document.getElementById('case-number-field');
    // const caseNumberFieldString = caseNumberField.value;
    // const caseNumber = parseInt(caseNumberFieldString);
    // const newCaseNumber = caseNumber -1;
    // caseNumberField.value = newCaseNumber;
     const newCaseNumber = updatedCaseNumber(false);
    //  const caseTotalPrice = newCaseNumber * 59;
    //  const caseTotalElement = document.getElementById('case-total');
    //  caseTotalElement.innerText = caseTotalPrice;
    updatedCasePrice(newCaseNumber);
})