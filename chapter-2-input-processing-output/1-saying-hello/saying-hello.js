/* const sayingHello = (name) => {
    console.log(`Hello, ${name}, nice to meet you')`)
}

sayingHello('Brian') */

const displayGreeting  = () => {
    const greetings = ['Hello', 'Cio', 'Hi']
    const random = Math.floor(Math.random() * greetings.length)
    console.log(greetings[random])
}

displayGreeting()