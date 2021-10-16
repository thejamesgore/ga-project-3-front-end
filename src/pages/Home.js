import React from 'react'

const Home = () => {
  return (
    <section>
      <div>
        <p className="title">TRAVEL APP - Map your world!</p>
      </div>
      <div className="hero-image">
        <img
          className="image1"
          src="https://images.unsplash.com/photo-1519055548599-6d4d129508c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="a travel photo"
        />
        <img
          className="image2"
          src="https://github.com/thejamesgore/ga-project-3-front-end/blob/development/images/iphonex1-min.png?raw=true"
          alt="picture of an iphone"
        />
      </div>
      <div className="links-to-pages">
        <p className="links-item1">Map your travels</p>
        <p className="links-item2">Share</p>
        <p className="links-item3">Create Memories</p>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <p>A BORING FOOTER</p>
        </div>
      </footer>
    </section>
  )
}

export default Home
