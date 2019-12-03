document.querySelector('header > h1').innerText = "Fortune Teller"
document.querySelector('header > h2').innerText = "Lets learn your future shall we?"
 function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
//    (the max is inclusive the max is inclusive)

    let month = getRandomIntInclusive(1, 12)
} 
//whats the difference between this and assignment 03?

let ranNumber = Math.floor(Math.random() * 8)
let dateNumber = Math.floor(Math.random() * 30)

function getMonthName(month) {
    let name
    switch (month) {
        case 1:
            name = 'Jan'
            break;
        case 2:
            name = 'Feb'
            break;
        case 3:
            name = 'March'
            break;
        case 4: 
            name = 'April'
            break; 
        case 5:
            name = 'May'
            break;
        case 6:
            name = 'June'
            break;
        case 7:
            name = 'July'
            break;
        case 8:
            name = 'Aug'
            break;
        case 9 :
            name = 'Sept'
            break;
        case 10:
            name = 'Oct'
            break;
        case 11:
            name = 'Nov'
            break;
        case 12:
            name = 'Dec'
            break;
    }
    return name
}

function date(dateNumber){
    let 
}

function mysticBall() {
    let message
    switch (ranNumber) {
        case 1: 
            message = 'You wil find $20.'
            break;
        case 2: 
            message = 'Your dog may run away'
            break;
        case 3: 
            message = 'You may find something sweet.'
            break;
        case 4: 
            message = 'You may run into an enemy'
            break;
        case 5: 
            message = 'You will join the stars'
            break;
        case 6: 
            message = 'Your life as you know it will come to an end.'
            break;
        case 7: 
            message = 'The first person you see is the love of your life.'
            break;
        case 8: 
            message = 'You should stay in bed.'
            break;
        }
        return message
}
let month = getRandomIntInclusive(1, 12)
const monthName = getMonthName(month)

const yourFortune = `On ${monthName} ${date}, ${message}`

document.querySelector('#fortune').innerText = yourFortune

console.log(monthName)