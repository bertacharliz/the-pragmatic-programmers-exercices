
const totalAmountBill = () => {
    let tip = 0
    let total = 0

    document.addEventListener('input',(event) => {
        let billAmount = parseInt(document.querySelector('.BillAmount__input').value)
        let tipRate = parseInt(document.querySelector('.Tip__input').value)
    

        if(event.target.value.length < 1) return
        if(event.target.value.length > 1) {
            tip = Math.ceil(billAmount * (tipRate/100) * 100) / 100
            total = billAmount + tip

            document.querySelector('.TotalBill__Amount').value = total
            document.querySelector('.Tip__Amount').value = tip
        }
    }, false)
}

totalAmountBill()
