import React from 'react'

const Stepfom3 = ({data,setData,setstep}) => {
  return (
   <>
   <h1>Step3</h1>

   <label >
        Contact
        <input
          type="text"
          placeholder="82382783273"
          value={data.contact}
          onChange={(e) => setData({
            ...data,
            contact: e.target.value
          })}
        />
      </label>

      <br /><br />

       <label >
        Address
        <input
          type="text"
          placeholder="Street 1"
          value={data.address}
          onChange={(e) => setData({
            ...data,
            address: e.target.value
          })}
        />
      </label>

      <br /><br />


       <label >
        Password
        <input
          type="text"
          placeholder="hjA789@"
          value={data.password}
          onChange={(e) => setData({
            ...data,
            password: e.target.value
          })}
        />
      </label>

      <br /><br />


        <button onClick={() => setstep(2)} >Prev Step</button>
      <button onClick={() => setstep(4)}>Next Step</button>

   </>
  )
}

export default Stepfom3
