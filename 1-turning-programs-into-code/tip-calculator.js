
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
        if(billAmountInput.value < 0) {
            billAmountErrorMessage.textContent = 'Negative numbers does not allowed'
            return
        } else {
            billAmountErrorMessage.textContent = ''
        }
        
        console.log(tipInput.value)
        if(tipInput.value || tipInput.value.startWith('-')) {
            tipRateErrorMessage.textContent = 'Negative numbers does not allowed'
            return
        } else {
            tipRateErrorMessage.textContent = ''
        }

        //// Handeling messages error in non-numeric value case
        // For bill amount 
        if(document.querySelector('.BillAmount__input').value !== '' && isNaN(billAmount) && event.target.matches('.BillAmount__input')) {
            billAmountErrorMessage.textContent = "Please enter a valid number for the bill amount" 
            billAmountErrorMessage.style.color = "red"
            return
        } else {
            billAmountErrorMessage.textContent = ''
        }

        // For tip 
        if(document.querySelector('.Tip__input').value !== '' && isNaN(tipRate) && event.target.matches('.Tip__input')) {
            tipRateErrorMessage.textContent = 'Please enter a valid number for the tip rate'
            tipRateErrorMessage.style.color = 'red'
            return
        } else {
            tipRateErrorMessage.textContent = ''
        }

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
