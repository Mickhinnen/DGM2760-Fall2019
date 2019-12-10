document.querySelector('header > h1').innerText = "The Aborist"
document.querySelector('header > h2').innerText = " Events and Arrays"
// create an array with 4 trees
const trees = ['oak', 'pine', 'aspen', 'Bald Cypress']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')


//displayResults.textContent = 'Testing here right now'
//errorElement.textContent = 'Testing here right now'

//display the list of trees inside the list results
const ListTrees = () => {
    let treeList = ''
    //for (i = 0; i < trees.length; i++) { }
    trees.forEach(tree => {
        treeList += `${tree} <br>`
        
    })
    displayResults.innerHTML = `${treeList} <span>${trees.length} elementslongs</span>`
}

ListTrees()

//more concise version of add redwood to the end
document.querySelector('#add_redwood').onclick = () => {
    trees.push('redwood') //push to add to end
    ListTrees()
}

document.querySelector('#add_peach').onclick = () => {
    trees.unshift('peach') //unshift to add to start 
    ListTrees()
}

document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0 ) {
    trees.shift() //shift to remove
    ListTrees()
    } else {
        errorElement.textContent = 'Can not remove firt tree do to there being no trees'
    }
}

document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 1) {
    trees.splice(1, 1)
    ListTrees()
    } else {
        errorElement.textContent = 'There is a mighty need for more than one tree'
    }
}

document.querySelector('#remove_treeLast').onclick = () => {
    if (trees.length > 0 ) {
    trees.pop() //pop to remove end
    ListTrees()
    } else {
        errorElement.textContent = 'I speak for the trees, or I wood if there were any'
    }
}

document.querySelector('#sortTrees').onclick = () => {
    if (trees.length > 1 ) {
        trees.sort()
        ListTrees()
    } else if (trees.length = 1) {
        errorElement.textContent = 'Really dude.'
    } else {
        errorElement.textContent = 'Trees? What trees? You might want to make like a tree and leaf.'
    }
}

// string in lower case
document.querySelector('#lowerTrees').onclick = () => {
    if (trees.length > 0 ) {
        let newTrees = trees.toString() 
        let treeString = newTrees.toLowerCase()
        document.getElementById("displayResults").innerHTML = treeString //"trees" doesn't work, or any varient
        // ListTrees() does nothing when this is active

        //querrySelector doesn't work. elementbyid works but doesn't stick
        //does order really matter that mutch? move outside it...
        //   newtrees = trees.map(tree => tree.toLowerCase())
     //   newListTrees()
     //trees = trees.join().toLowerCase()
     //trees = trees.split(/\s+/)
    /*  let treeList = []
      trees.forEach(tree => {
          treeList.push(tree.toLowerCase())
      })*/
     //   trees.map(trees => trees.toLowerCase())
     //   trees.toString().toLowerCase()
     //   trees_tolowercase = trees.map(x=>x.toLowerCase())
     /* I tried so many things and nothing worked. I couldn't find anything on mdn, i even turned 
     to google and youtube and I found nothing that worked. the above noted out are my attempts,
     please point me in the right direction*/
        //console.log(trees.length)
        

    } else {
        errorElement.textContent = 'Wood you mind adding some trees so I can work'
    }
}

document.querySelector('#name_tree3').onclick = () => {
    if (trees.length > 2 ) {
        errorElement.textContent = `${trees[2]}`
    } else {
        errorElement.textContent = 'not enough trees to know number three'
    }
}

document.querySelector('#name_tree4').onclick = () => {
    if (trees.length > 3 ) {
        errorElement.textContent = `${trees[3]}`
    } else {
        errorElement.textContent = 'not enough trees to know number four'
    }
}
/* add a redwood to the end, old way  var is no longer used instead const or let, other is => function
var addTreeStart = function() {
    tree.push("redwood");
    listTrees();
};
var redwood = document.getElementById('add_redwood'); can use qurySelect instead of getElement
redwood.onclick = addTreeStart; can use function instead of onclick*/