
//document.getElementById('company').innerHTML = "Joe's Bed and Breakfast"  does same as query

document.querySelector('#company').innerText = "Joe's Bed and Breakfast"

document.querySelector('header > h2').innerText = "Home away from home."

let userName = prompt("what is your name?")

//let message = 'Hello ${userName}, welcome to your home away from home!' (another way to do it)

let message = "Hello " + userName + ", welcome to your home away from home!"

document.querySelector('#greeting').innerText = message