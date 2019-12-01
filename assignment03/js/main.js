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
        giveAward()
        
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
    let imagePath = '#'
    switch (totalGuesses) {
        case 1:
        case 2:
        case 3:
            imagePath = 'images/award1.png'
            break
        case 4:
        case 5:
        case 6:
            imagePath = 'images/award2.png'
            break
        case 7:
        case 8:
        case 9:
            imagePath = 'images/award3.png'
            break
        case 10:
            feedback.innerText = 'Too many attempts, please refresh page'
            imagePath = 'images/award3.png'
            break
    }

    const awardImage = document.createElement('img') //create a <img> element
    awardImage.setAttribute('src', imagePath)
    const newAward = document.createElement('img')
    newAward.setAttribute('src', imagePath)
    const ribbon = document.querySelector('#ribbon')

  //  ribbon.appendChild(awardImage)

    if (ribbon.hasChildNodes() == true) {
     //   const newAward = document.createElement('img')
     //   newAward.setAttribute('src', imagePath)
        ribbon.removeChild(awardImage)
        ribbon.appendChild(newAward)
    } else {
        ribbon.appendChild(awardImage)
    } //I tried for hrs, mdn wasn't helpfull, other src were confusing
}