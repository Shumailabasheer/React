import React from 'react'
import image1 from "../assets/images/images.jpg";
import "./gallery/Gallery.css"


const Gallery = () => {
  return (
    <>
    <h1 className='blue'>Our Gellery</h1>
    <div className="container">
       <img src="https://img.freepik.com/free-photo/high-angle-man-living-countryside_23-2150642419.jpg?semt=ais_hybrid&w=740&q=80" alt="images"/>
    <br />

    {/* <img src="../assets/images/images.jpg" alt="eyes-image" />  ===images ko is trha use ni kare ga dow hui vi ko  */}
    <img src={image1}alt="eyes-images" />
<br />
    <img src="/images/image.avif" alt="images"/>
    
    </div>
   </>
  )
}

export default Gallery

