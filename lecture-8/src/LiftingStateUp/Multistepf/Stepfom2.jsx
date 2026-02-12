import React from 'react'

const Stepfom2 = ({data,setData,setstep}) => {
  return (
<>
<h1>Step2</h1>


      <label >
        Email
        <input
          type="email"
          placeholder='abc@gmail.com'
          value={data.email}
          onChange={(e) => setData({
            ...data,
            email: e.target.value
          })}
        />
      </label>

      <br /><br />

      <label >
        Qualification
        <input
          type="text"
          placeholder='Intermediate'
          value={data.qualification}
          onChange={(e) => setData({
            ...data,
            qualification: e.target.value
          })}
        />
        <br /><br />

      </label>
         <button onClick={() => setstep(1)} >Prev Step</button>
      <button onClick={() => setstep(3)}>Next Step</button>
</>

  )
}

export default Stepfom2
