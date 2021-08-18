// document.getElementById('case-plus').addEventListener('click', function(){
//     const caseInput = document.getElementById('case-number');
//     const caseNumber = caseInput.value;
//     caseInput.value = parseInt(caseNumber) + 1;
    
// });

// document.getElementById('case-minus').addEventListener('click', function(){
//    const caseInput = document.getElementById('case-number');
//    const caseNumber = caseInput.value;
//    caseInput.value = parseInt(caseNumber) - 1; 
// })

// eker odhik call kora hoise tai ekhane function diye kaj korte hobe
function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1; 
    }
    productInput.value =productNumber;
// Update product total
   const productTotal = document.getElementById(product + '-total');
   productTotal.innerText = productNumber * price; 
}
// handle Phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1229, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1229, false);
})


// handle Case increase decrease events
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
})


