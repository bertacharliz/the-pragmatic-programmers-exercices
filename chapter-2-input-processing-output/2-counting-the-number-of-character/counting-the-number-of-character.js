const countingCaracteres = () => {
    document.addEventListener('input', (e) => {
        const inputValue = document.getElementById('input').value
        const inputLength = inputValue.length
        if (input !== 0) {
            document.getElementById('output').innerHTML = `${inputValue} has ${inputLength} caracters`
        } else {
            document.getElementById('output').innerHTML = 'You have to enter a name!'
        }
    }, false)
}

countingCaracteres()