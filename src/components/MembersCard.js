import React from 'react'

function MembersCard({ name, city, rating, imageUrl, comments }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="picture of the country" />
      </div>

      <div className="card-content">
        <div className="card-title">
          <h3>
            {city}
            {city ? ', ' : ''}
            {name}
          </h3>
          <h3>
            {rating ? 'You rated it ' : ''}
            {rating}
            {rating ? '/5' : ''}
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
