// Handling Errors function
const handlingErrors = (event, parameters) => {
    let selector = document.querySelector(parameters.inputSelector)
    let roundedValue = parseInt(document.querySelector(parameters.inputSelector).value)
    let elemId = document.getElementById(parameters.errorElemId)
    if (event.target.matches(parameters.inputSelector)) {
        if (selector.value !== '' && isNaN(roundedValue)) {
            elemId.textContent = `Please enter a valid number for the ${parameters.errorLabel}` 
            elemId.style.color = "red"
        }
        else if (selector.value && selector.value.startsWith('-')) {
            elemId.textContent = 'Negative numberes are not allowed'
            elemId.style.color = 'red'
        } else {
            elemId.textContent = ''
        }
    }
}

// Computing tip and total functions
const computeTip = (billAmount, tipRate) => {
    return Math.ceil(billAmount * (tipRate/100) * 100) / 100
}

const computeTotal = (billAmount, tip) => {
    return billAmount + tip
}   

// Executing functions at the event listener 
const totalAmountBill = () => {
    let tip = 0
    let total = 0

    document.addEventListener('input',(event) => {
        let billAmount = parseInt(document.querySelector('.BillAmount__input').value)
        let tipRate = parseInt(document.querySelector('.Tip__input').value)

        handlingErrors(event, {inputSelector: '.BillAmount__input', errorElemId:'billAmountError', errorLabel:'bill amount'})
        handlingErrors(event, {inputSelector:'.Tip__input', errorElemId:'tipRateError', errorLabel:'tip'})
        

        // Computing and display the tip and total amount
        if(event.target.value.length < 1) return
        if(event.target.value.length > 1) {

            tip = computeTip(billAmount, tipRate)   
            total = computeTotal(billAmount, tip)  

            document.querySelector('.Tip__Amount').value = tip
            document.querySelector('.TotalBill__Amount').value = total
        }
    }, false)
}

totalAmountBill()
