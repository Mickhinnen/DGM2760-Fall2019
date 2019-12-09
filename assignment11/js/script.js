
                //make more generic by getAPIData(url)
async function getHotelData() {
 try {
    const reponse = await fetch ('../assignment11/hotel.json')
    return await response.json() //return json object
 }   catch (error) {
     console.error(error)
 }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)
console.log(hotelData)