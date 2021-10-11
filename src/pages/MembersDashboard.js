import React, { useState } from 'react'

import CreateCountryForm from '../components/CreateCountryForm'

export default function MembersHome() {
  // function that automatically gets all countries for user based on id
  // function that sorts through that data and only adds countries to an array
  // Displays every country travelled to underneath map
  // functinon that passes each location from the array into map function and drops pin onto map

  return (
    <div className="members-home">
      <div className="main-members-container">
        {/* LEFT SIDE OF PAGE */}
        <div className="left-side">
          <h1>THIS IS THE LEFT SIIIIIDE</h1>
          <h1>THIS IS THE LEFT SIIIIIDE</h1>
          <h1>THIS IS THE LEFT SIIIIIDE</h1>
          <h1>THIS IS THE LEFT SIIIIIDE</h1>
        </div>

        {/* MAP COMPONENET */}

        {/* RIGHT SIDE OF PAGE */}

        <div className="right-side">
          <h1>Create New Trip</h1>
          <CreateCountryForm />
        </div>
      </div>
      <div className="visted-bar">
        <h1>THIS IS WHERE THE TOTAL COUNTRIES VISITED BAR GOES</h1>
      </div>
    </div>
  )
}
