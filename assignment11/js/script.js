
                //make more generic by getAPIData(url)
async function getHotelData() {
 try {
    const reponse = await fetch ('../hotel.json')
    return await response.json() //return json object
 }   catch (error) {
     console.error(error)
 }
}

console.log(getHotelData())