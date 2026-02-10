import React, { useContext } from 'react'
import { ThemeContext } from '../Context/Themeprov'

const Footer = () => {
    const {CurrentStyle}= useContext(ThemeContext)
  
  return (
     <div className="bg-body-secondary border-top p-5 display-3 text-dark" style={CurrentStyle?.base || {}}>
    <h1 style={CurrentStyle.text}>My Footer</h1>

  </div>
  )
}

export default Footer
