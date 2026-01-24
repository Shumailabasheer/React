import React from 'react'
import './hero.css'
const Herosec = () => {
  return (
   <>

    <section className="hero" id="home">
      <div className="hero-text">
        <h1>Promote Your App with SoftLand</h1>
        <p>
          We are team of talented designers making websites with Bootstrap.
        </p>

        <div className="btns">
          <button>Google Play</button>
          <button>App Store</button>
        </div>
      </div>

      <div className="hero-img">
        <img src={phone} alt="app" />
      </div>
    </section>


   
   </>
  )
}

export default Herosec
