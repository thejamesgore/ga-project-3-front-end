// import React from 'react'
// import { useState, useEffect } from 'react'
// import ReactMapGL, { MapContext } from 'react-map-gl'
// import { getCoordinates } from '../lib/helpers'

// const coordinates = [
//   {
//     lat: 51.5073509,
//     lng: -0.1277583,
//   },
//   {
//     lat: 48.856614,
//     lng: 2.3522219,
//   },
//   {
//     lat: 53.1423672,
//     lng: -7.692053599999999,
//   },
// ]

// const [viewport, setViewport] = useState({
//   width: 500,
//   height: 300,
//   latitude: 46,
//   longitude: 17,
//   zoom: 1,
// })

// export default function Map() {
//   return (
//     <div>
//       <h1>This is where the map goes</h1>
//       <ReactMapGL
//         {...viewport}
//         // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
//         mapboxApiAccessToken="pk.eyJ1IjoiamFtZXNnb3JlIiwiYSI6ImNrdW5qMWZnYTFucGgycG82MGVwaW83aXkifQ.ClJikErzkit5U1DNhCCwpw"
//         onViewportChange={(nextViewport) => setViewport(nextViewport)}
//       >
//         {/* MAP OVER THE MARKERS FUNCTION WITH CO-ORDINATES */}
//         {coordinates?.map((coordinates) => (
//           <CustomMarker
//             key={coordinates.lat}
//             lat={coordinates.lat}
//             lng={coordinates.lng}
//           />
//         ))}

//         {/* END OF MAP FUNCTION */}
//       </ReactMapGL>
//     </div>
//   )
// }

// function CustomMarker(props) {
//   const context = React.useContext(MapContext)

//   const { lng, lat } = props

//   const [x, y] = context.viewport.project([lng, lat])

//   const markerStyle = {
//     position: 'absolute',
//     background: '#fff',
//     left: x,
//     top: y,
//   }

//   return (
//     <div style={markerStyle}>
//       ({lng}, {lat})
//     </div>
//   )
// }
