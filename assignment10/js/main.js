function duplicateMenu() {
  // get all of the anchor elements from the top menu // <a> is anchor
 let topList = document.querySelectorAll('ul#primaryNavigation li a') //technically a node list has array like behavior

 // create the new list items for the bottom of page
 let newList = document.createElement('ul')

 // take all of toplist and insert into bottom list, array helper named forEach makes easy
//              (param => {} )
 topList.forEach(menuItem => {
     let newLI = document.createElement('li')
     let newLink = document.createElement('a')
     newLink.setAttribute('href', menuItem.getAttribute('href'))
     // 'copy' the textContent from upper menu to new menu
     //let newText = document.getElementById('#primaryNavigation').textContent NOTHING!!!WHY!!
     newLink.textContent = menuItem.textContent 
     // append children to make them appear in the DOM
     //newLink.appendChild(newText)
      newList.appendChild(newLI)
      newLI.appendChild(newLink)
      document.querySelector('#smallNavArea').appendChild(newList)
  //or smallMenulink
 })

}

duplicateMenu()

