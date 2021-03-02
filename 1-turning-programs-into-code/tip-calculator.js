const validateBillAmount = (event) => {
    let billAmountInput = document.querySelector('.BillAmount__input')
    let billAmount = parseInt(document.querySelector('.Tip__input').value)
    let billAmountErrorMessage = document.getElementById('billAmountError')
    if(event.target.matches('.BillAmount__input')) {
        if(billAmountInput.value !== '' && isNaN(billAmount)) {
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
    if(event.target.matches('.Tip__input')) {
        if(tipInput.value !== '' && isNaN(tipRate)) {
            tipRateErrorMessage.textContent = 'Please enter a valid number for the tip rate'
            tipRateErrorMessage.style.color = 'red'
        } else if (tipInput.value && tipInput.value.startsWith('-')) {
            tipRateErrorMessage.textContent = 'Negative numbers are not allowed'
            tipRateErrorMessage.style.color = 'red'
        } else {
            tipRateErrorMessage.textContent = ''
        }
    }    
}


const totalAmountBill = () => {
    let tip = 0
    let total = 0

    document.addEventListener('input',(event) => {
        // Round fractions of a cent up to the next cent.
        let billAmount = parseInt(document.querySelector('.BillAmount__input').value)
        let tipRate = parseInt(document.querySelector('.Tip__input').value)

        let billAmountErrorMessage = document.getElementById('billAmountError')
        let tipRateErrorMessage = document.getElementById('tipRateError')

        // Messages errors  
        
        //// Handeling messages error in negative number case
        let billAmountInput = document.querySelector('.BillAmount__input')
        let tipInput = document.querySelector('.Tip__input')

        validateBillAmount(event)
        validateTipAmount(event)

        //// Handeling messages error in non-numeric value case
        // For bill amount 
        

        // Computing and display the tip and total amount
        if(event.target.value.length < 1) return
        if(event.target.value.length > 1) {
            tip = Math.ceil(billAmount * (tipRate/100) * 100) / 100
            total = billAmount + tip
            
            document.querySelector('.Tip__Amount').value = tip
            document.querySelector('.TotalBill__Amount').value = total
        }
    }, false)
}
totalAmountBill()
