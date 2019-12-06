
function tellStory() {
    
    const nounArray = document.querySelector('#nouns').textContent
    //const nounLower = nounArray.toLowerCase()
    const nounList = nounArray.toLowerCase().split(/\s+/)
    
    
    const adjectiveArray = document.querySelector('#adjectives').textContent
    const adjList = adjectiveArray.toLowerCase().split(/\s+/)

    const verbArray = document.querySelector('#verbs').textContent
    const verbList = verbArray.toLowerCase().split(/\s+/)

    const myStory = `Once upon a time there were four ${nounList[1]}s, ${adjList[1]}s, ${verbList[1]} `

    document.querySelector('#story').innerText = myStory
    
}