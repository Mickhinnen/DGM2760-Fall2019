
                //make more generic by getAPIData(url)
async function getHotelData() {
 try {
    const reponse = await fetch ('../assignment11/hotel.json')
    return await reponse.json //return json object
 }   catch (error) {
     console.error(error)
 }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)
//console.log(hotelData)

// store in a variable document.querySelectorAll('#a')
// use that variable to loop over ech element and addEventlistener to each one
// sugested use of forEach
document.querySelector('#marriott').addEventListener('click', hotelInfo)

function hotelInfo(event) {
   let hotelChoice = hotelData.hotels.find(hotel => {
       return event.target.id === hotel.name.toLowerCase()
   })
    console.log(hotelChoice)
  //  console.log(event.target.id)

   document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel`

}