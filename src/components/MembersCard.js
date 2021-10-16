import React from 'react'

function MembersCard({ name, city, imageUrl, comments }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="picture of the country" />
      </div>

      <div className="card-content">
        <div className="card-title">
          <h3>
            {city}
            {name}
          </h3>
        </div>
        <div className="card-body">
          <p>{comments}</p>
        </div>
        <div className="btn">
          <button>
            <a>View More</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MembersCard
