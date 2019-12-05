
function tellStory() {
    const nounArray = document.querySelector('#nouns').textContent   
    nounArray.toString().split(/\s+/)
   // const adjectiveArray = 

   // const verbArray = 

    const myStory = `Once upon a time there were four ${nounArray[0]}s `

    document.querySelector('#story').innerText = myStory
    console.log(myStory)
}