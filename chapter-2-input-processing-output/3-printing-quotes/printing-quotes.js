const printAnswer = () => {
    document.addEventListener('click', (e) => {
        
        if (e.target.matches('#button')) {
            document.getElementById('output').innerHTML = `Obi-Wan Kenobi says, "These aren't the droids
        ​you're looking for."`
        } 
    }, false)
}

printAnswer()