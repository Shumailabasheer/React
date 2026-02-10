import React, { useContext } from 'react'
import { ThemeContext } from '../Context/Themeprov'

const About = () => {
      const {CurrentStyle}= useContext(ThemeContext)
  
  return (
   <div>
      <h1>About Page</h1>
      <p style={CurrentStyle.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit rerum cupiditate, non ducimus nemo quasi dicta doloremque voluptatibus modi accusantium molestias obcaecati laborum veniam eligendi? Omnis est sit asperiores ipsum.</p>
      <button style={CurrentStyle.button}>View More</button>
    </div>
  )
}

export default About
