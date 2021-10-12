import React from 'react'
import { useState, useEffect } from 'react'
import ReactMapGL from 'react-map-gl'
import { getCoordinates } from '../lib/helpers'

export default function Map() {
  const [mapMarkers, setMapMarkers] = useState([])

  useEffect(() => {
    console.log(`I'm logging form the map function`)
    getCoordinates('london')
  }, [])

  const [viewport, setViewport] = useState({
    width: 500,
    height: 300,
    latitude: 46,
    longitude: 17,
    zoom: 1,
  })
  return (
    <div>
      <h1>This is where the map goes</h1>
      <ReactMapGL
        {...viewport}
        // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        mapboxApiAccessToken="pk.eyJ1IjoiamFtZXNnb3JlIiwiYSI6ImNrdW5qMWZnYTFucGgycG82MGVwaW83aXkifQ.ClJikErzkit5U1DNhCCwpw"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      />
    </div>
  )
}
