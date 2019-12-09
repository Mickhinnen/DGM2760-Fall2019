
     //make more generic by getAPIData(url)
async function getHotelData() {
 try {
    const reponse = await fetch ('../assignment11/hotel.json')
    return await reponse.json() //return json object
 }   catch (error) {
     console.error(error)
 }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)

//console.log(hotelData)
// store this in a variable = document.querySelectorAll("a")
let guestChoice = document.querySelectorAll('a')
//use that variable to loop over each element and addEventListener to each one
//suggested use of forEach
guestChoice.forEach(hotelChoice => {
    document.querySelector('#hotels').addEventListener('click', hotelInfo)
})
//document.querySelector("#marriott").addEventListener('click', hotelInfo)

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })
    console.log(hotelChoice)

    document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel`
    document.querySelector('#address').textContent = `${hotelChoice.address}`
    document.querySelector('#rooms').textContent = `${hotelChoice.rooms}`
    document.querySelector('#gym').textContent = `${hotelChoice.gym}`
    document.querySelector('#type').textContent = `${hotelChoice.roomTypes}`
    document.querySelector('#picture') = `${hotelChoice.picture}`
}