
function tellStory() {
    
    const nounArray = document.querySelector('#nouns').value
    //const nounLower = nounArray.toLowerCase()
    const nounList = nounArray.toLowerCase('').split(/\s+/)
    
    
    const adjectiveArray = document.querySelector('#adjectives').value
    const adjList = adjectiveArray.toLowerCase('').split(/\s+/)
    
    //const verbArray = document.getElementById("verbs").value = ''
    const verbArray = document.querySelector('#verbs').value //innerText //= ''  //comes up undefined
    const verbList = verbArray.toLowerCase('').split(/\s+/)

    const myStory = `Once upon a time there were four ${adjList[0]} ${nounList[0]}s named Floppsy, Mopsy. Cotton-tail and Petter.
    They lived with their Mother underneath a ${nounList[1]} near a ${adjList[1]} ${nounList[2]}.
    Now, my dears, said ${adjList[2]} Mrs.Rabbit, you may go over the ${nounList[3]} or around the ${nounList[4]}, 
    but do not go into Mr. McGrehor's ${nounList[5]},
    your Father had an accident there and he was put in a ${nounList[6]} by Mr. McGregor. 
    Now ${verbList[0]} along, and don't get into mischeif. I am going ${verbList[1]}ing`

    document.querySelector('#story').innerText = myStory
    console.log(verbList)
}