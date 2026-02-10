import React, { useContext } from 'react'
import { ThemeContext } from '../Context/Themeprov'

const Home = () => {
  const {CurrentStyle}= useContext(ThemeContext)
  // console.log(CurrentStyle)
  const theme = CurrentStyle.theme;   //==yaha theme mil jae gi jo theme waha ho gi uska stylemil jae ga
  return (
    <div className='container-xxl'>
      <h1 className='display-3 fw-bold' style={{color:'black'}}>Home Page</h1>
      <p style={CurrentStyle.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit rerum cupiditate, non ducimus nemo quasi dicta doloremque voluptatibus modi accusantium molestias obcaecati laborum veniam eligendi? Omnis est sit asperiores ipsum.</p>
      <button className='btn' style={CurrentStyle.button}>View More</button>
<br /><br />
{/* <img src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg" width={300} alt="vector-img" /> */}

{/* is ma hum image change kare ga theme ka sath optonal chaning ka use krte hua agr theme ye ho to ye wali image dikha dena wrna defoult image dikhae ga */}
{
  theme === "light"? <img src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg" alt="" /> 
   : theme === "dark"? <img src="https://img.freepik.com/premium-vector/abstract-portrait-african-woman-with-geometric-elements_23-2151992192.jpg?size=626&ext=jpg" alt="" />
       :theme === "grey"? <img src="https://img.freepik.com/premium-vector/group-businesspeople-with-portfolio-teamwork-illustration_1073071-40348.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
        :theme === "blue"? <img src="https://img.freepik.com/premium-vector/graphics-designers-working-project_442409-1404.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
            : <img src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg" alt="" />
}
    </div>
    
  )
}

export default Home
