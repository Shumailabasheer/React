import React, { useState } from 'react'

const Product = ({filtered}) => {    //===jis jis ka tittle is text sy match kare ga wo produtc chahiye
// const [filteredprod,setfilterdprod]=useState([])    //=== iska under filter hui product ae gi

//   const product =[
//     {
//       id:1,
//        title: "facewash",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//     },
//     {
//       id:2,
//        title: "maskara",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//     },
//     {
//       id:3,
//        title: "Facepowder",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//     },
//      {
//       id: 4,
//       title: "soap",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quibusdam."
//     },
//     {
//       id: 5,
//       title: "shampo",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quibusdam."
//     },
     

//   ]
//  let filtered = [];
//   filtered = product?.filter(       ///== //==agr searchtext ho to ye kam krwa dena is prod ka uper lagani ha filteration tittle ka bara ho
//     (product) => product?.title.toLowerCase().includes(searchText?.toLowerCase())
//   ) 
  
  return (
    <>
    {
       Array.isArray(filtered) && filtered.length > 0 ? filtered.map((p, i) => (
          <div key={p.id+i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <hr />
          </div>
        ))
        :(
          <h1>No Match Found!</h1>
        )
      }

    </>
  )
}

export default Product
