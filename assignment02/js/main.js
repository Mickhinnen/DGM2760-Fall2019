document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "This IZ Chief Inspector Clouseau speaking on the pheaun"

function reDisplay() {
let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight}
 pixels tall.`
let offset = `Window offset is ${window.screenX} pixels from the left edge and ${window.screenY}
 pixels from the top of the display`
 let pageURL = `The page URL is ${document.URL}`

let myWindow = document.querySelector( '#myWindow' ).innerText = `${windowSizes} \n ${offset} \n ${pageURL}`
}

let documentTitle = ` Document Title is 02 Inspector Clouseau`

let LastModif = ` The document was last updated on ${document.lastModified}`

let myDocument = document.querySelector( '#myDocument').innerText = `${documentTitle} \n ${LastModif}`
reDisplay()