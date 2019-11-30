document.querySelector('header > h1').innerText = "Guessing Game"
document.querySelector('header > h2').innerText = "Loops"
// pick a random number between 0 and 16



let correctNumber = Math.floor(Math.random() * 15)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1

console.log(`The correct number is ${correctNumber}`)

function evalGuess() {
    totalGuesses += 1 // also ++ totalguesses = totalGuesses + 1
    gamerGuess = document.querySelector('#guess').value
    console.log(totalGuesses, gamerGuess)
    const feedback = document.querySelector('#feedback')

    if (gamerGuess == correctNumber) {
        console.log('gamerGuess is equal to correctNumber')
        feedback.innerText = 'Correct!'
        
    } else if (gamerGuess > correctNumber && gamerGuess < 16) {
        feedback.innerText = 'too high, try again.'
    } else if (gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = 'too low, try again'
    } else {
        feedback.innerText = 'Please pick a number between 1 and 15, try again'
        totalGuesses -= 1
    }

    document.querySelector('#Attempts').innerText = totalGuesses

}

function giveAward() {
    console.log('Congratulations!')
    switch (totalGuesses) {
        case 1:
        case 2:
        case 3:
            console.log('Blue ribbon for you')
            break
        case 4:
        case 5:
        case 6:
            console.log('Yellow ribon for you')
            break
        case 7:
            console.log('White ribbon for you')
    }

    const awardImage = document.createElement('img') //creates a <img> element
    awardImage.setAttribute('src', '../images/award-2648043_640.png')
    const ribbon = document.querySelector('#ribbon')

    ribbon.appendChild(awardImage)
}