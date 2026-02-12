import React, { useState } from 'react'
import Stepfom1 from './Stepfom1'
import Stepfom2 from './Stepfom2'
import Stepfom3 from './Stepfom3'
import Output from './Output'
const Form = () => {
  const[step,setstep]=useState(1)
  const[formData,setData] = useState({
    name: "",
    fatherName:"",
    contact:"",
     qualification:"",
    email:"",
    password:"",
    address:""
})

// console.log(formData)


  return (
<>

<h1>Multistep from</h1>
{
  step === 1 && (
    <Stepfom1  data={formData}
     setData={setData} 
     setstep={setstep}
    
    />
  )
}
{
   step === 2 && (
    <Stepfom2  data={formData}
     setData={setData} 
     setstep={setstep}
    
    />
  )
}
{
   step === 3 && (
    <Stepfom3  data={formData}
     setData={setData} 
     setstep={setstep}
    
    />
  )
}
{
   step === 4 && (
    <Output  data={formData}
   
    />
  )
}

</>
  )
}

export default Form
