import Geocode from 'react-geocode'

Geocode.setApiKey('AIzaSyBK6SzZbuxMjIHPxdoBk54ag5K23MLTss4')
Geocode.setLanguage('en')
Geocode.enableDebug()

export const getCoordinates = async (location) => {
  //needs to take an array
  Geocode.fromAddress(location).then(
    (response) => {
      let coordinates
      coordinates = response.results[0].geometry.location
      console.log(`the coorinates are`, coordinates)

      // needs to return an array
    },
    (error) => {
      console.error(error)
    }
  )
}
