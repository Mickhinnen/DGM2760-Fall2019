document.querySelector('header > h1').innerText = "Fortune Teller"
document.querySelector('header > h2').innerText = "Lets learn your future shall we?"
 function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //    (the max is inclusive the max is inclusive)


    let month = getRandomIntInclusive(1, 12)
    let fate = getRandomIntInclusive(1, 8)
    let dateNumber = getRandomIntInclusive(1, 30)
} 
//whats the difference between this and assignment 03?
//let ranNumber = Math.floor(Math.random() * 8)
//let dateNumber = Math.floor(Math.random() * 30)



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

function getTheDay (dateNumber) {
    let date 
    switch (dateNumber) {
        case 1:
            date = '1'
            break;
        case 2:
            date = '2'
            break;
        case 3: 
            date = '3'
            break;
        case 4:
            date = '4'
            break;
        case 5:
            date = '5'
        case 6:
            date = '6'
            break;
        case 7:
            date = '7'
            break;
        case 8:
            date = '8'
            break;
        case 9:
            date ='9'
            break;
        case 10:
            date = '10'
            break;
        case 11:
            date ='11'
            break;
        case 12:
            date ='12'
            break;
        case 13: 
            date = '13'
            break;
        case 14:
            date ='14'
            break;
        case 15:
            date = '15'
            break;
        case 16:
            date = '16'
            break;
        case 17:
            date = '17'
            break;
        case 18:
            date = '18'
            break;
        case 19:
            date = '19'
            break;
        case 20:
            date = '20'
            break;
        case 21:
            date = '21'
            break;
        case 22:
            date = '22'
            break;
        case 23:
            date = '23'
            break;
        case 24:
            date ='24'
            break;
        case 25:
            date ='25'
            break;
        case 26:
            date ='26'
            break;
        case 27:
            date = '27'
            break;
        case 28:
            date = '28'
            break;
        case 29:
            date ='29'
            break;
        case 30:
            date = '30'
            break;
        }
        return date
}

function getYourFate(fate) {
    let message
    switch (fate) {
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
let date = getRandomIntInclusive(1, 30)
const theDay = getTheDay(date)
let fate = getRandomIntInclusive(1, 8)
const yourFate = getYourFate(fate)

const yourFortune = `On ${monthName} ${theDay}, ${yourFate}`

document.querySelector('#fortune').innerText = `${yourFortune}`

console.log(monthName)