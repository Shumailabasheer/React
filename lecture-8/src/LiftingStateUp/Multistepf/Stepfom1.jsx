
import React from 'react'
import UseRefExm from './UseRefExm'

const Stepfom1 = ({data,setData,setstep}) => {



  return (
<>
   <h1>step1</h1>
   <label htmlFor="n">Name</label>
   <input
   id='n'
   placeholder='Enter your name'
   type="text"
    value={data.name}
        onChange={(e) => setData({
          ...data,    ///==obj ki excisting pro rakhni ha or now prop add krwani ha ya kisi ek ko update krni ha sirf name undate krna ha baqi gaib ni hona chahiye sb show ho email,contact,,, 
          // chahe ma name q na fill kr rhi ho sprid operator use ho ga
          name: e.target.value   //==pura b same rhy ga sirf name ki value update ho jae gi
        })} 
   />

<br /><br />

      <label htmlFor="f">Father Name</label>
      <input
        id='f'
        type="text"
        placeholder='Enter Father Name'
        value={data.fatherName}
        onChange={(e) => setData({
          ...data,
          fatherName: e.target.value
        })}
      />

      <br /><br />
      <button onClick={() => setstep(2)}>Next Step</button>
{/* setStep sy state update ho gi next step pr cahe ga */}
<br /><br />
<UseRefExm/>
</>
  
  )
}

export default Stepfom1
