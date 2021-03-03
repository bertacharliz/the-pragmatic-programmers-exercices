const handlingErrors = (event, inputSelector, errorElemId) => {
    let selector = document.querySelector(inputSelector)
    let roundedValue = parseInt(document.querySelector(inputSelector).value)
    let elemId = document.getElementById(errorElemId)
    if (event.target.matches(inputSelector)) {
        if (selector.value !== '' && isNaN(roundedValue)) {
            elemId.textContent = "Please enter a valid number for the bill amount" 
            elemId.style.color = "red"
        }
        else if (selector.value && selector.value.startsWith('-')) {
            elemId.textContent = 'Negative numbers are not allowed'
            elemId.style.color = 'red'
        } else {
            elemId.textContent = ''
        }
    }
}





/* const validateBillAmount = (event) => {
    let billAmountInput = document.querySelector('.BillAmount__input')
    let billAmount = parseInt(document.querySelector('.BillAmount__input').value)
    let billAmountErrorMessage = document.getElementById('billAmountError')
    if (event.target.matches('.BillAmount__input')) {
        if (billAmountInput.value !== '' && isNaN(billAmount)) {
            billAmountErrorMessage.textContent = "Please enter a valid number for the bill amount" 
            billAmountErrorMessage.style.color = "red"
        }
        else if (billAmountInput.value && billAmountInput.value.startsWith('-')) {
            billAmountErrorMessage.textContent = 'Negative numbers are not allowed'
            billAmountErrorMessage.style.color = 'red'
        } else {
            billAmountErrorMessage.textContent = ''
        }
    }
}

const validateTipAmount = (event) => {
    let tipInput = document.querySelector('.Tip__input')
    let tipRate = parseInt(document.querySelector('.Tip__input').value)
    let tipRateErrorMessage = document.getElementById('tipRateError')
    if (event.target.matches('.Tip__input')) {
        if (tipInput.value !== '' && isNaN(tipRate)) {
            tipRateErrorMessage.textContent = 'Please enter a valid number for the tip rate'
            tipRateErrorMessage.style.color = 'red'
        } else if (tipInput.value && tipInput.value.startsWith('-')) {
            tipRateErrorMessage.textContent = 'Negative numbers are not allowed'
            tipRateErrorMessage.style.color = 'red'
        } else {
            tipRateErrorMessage.textContent = ''
        }
    }    
} */

const computeTip = (billAmount, tipRate) => {
    return Math.ceil(billAmount * (tipRate/100) * 100) / 100
}

const computeTotal = (billAmount, tip) => {
    return billAmount + tip
}   

const totalAmountBill = () => {
    let tip = 0
    let total = 0

    document.addEventListener('input',(event) => {
        // Round fractions of a cent up to the next cent.
        let billAmount = parseInt(document.querySelector('.BillAmount__input').value)
        let tipRate = parseInt(document.querySelector('.Tip__input').value)

        /* validateBillAmount(event)
        validateTipAmount(event) */

        handlingErrors(event, '.BillAmount__input', 'billAmountError')
        handlingErrors(event, '.Tip__input', 'tipRateError')

        //// Handeling messages error in non-numeric value case
        // For bill amount 
        

        // Computing and display the tip and total amount
        if(event.target.value.length < 1) return
        if(event.target.value.length > 1) {
            tip = computeTip(billAmount, tipRate)
/*          tip = Math.ceil(billAmount * (tipRate/100) * 100) / 100
 */         
            total = computeTotal(billAmount, tip)  
/*          total = billAmount + tip
 */            
            document.querySelector('.Tip__Amount').value = tip
            document.querySelector('.TotalBill__Amount').value = total
        }
    }, false)
}
/* console.log('Compute Tip 200 / 15% = 30', computeTip(200, 15), computeTip(200, 15) === 30)
 */

 console.log('Compute total 200 + 30 = 230', computeTotal(200, 30), computeTotal(200, 30) === 230)
totalAmountBill()
