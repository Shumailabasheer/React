import React from 'react'
import SearchBox from './Example/SearchBox'
import { useState } from 'react'
import Product from './Example/Product'
// import Parent from './Parent'

const Main = () => {
  const[search,setsearch]=useState("")    //===is state ko hum searchBox.jsx ma prop ka throw pass kare ga
  //  console.log(search);
  // ===ek kam do diffrent tariqe sy kr sakta ha==///
const product =[
    {
      id:1,
       title: "facewash",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
      id:2,
       title: "maskara",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
      id:3,
       title: "Facepowder",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
     {
      id: 4,
      title: "soap",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quibusdam."
    },
    {
      id: 5,
      title: "shampo",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quibusdam."
    },
     

  ]
 let filtered = [];
  filtered = product?.filter(       ///== //==agr searchtext ho to ye kam krwa dena is prod ka uper lagani ha filteration tittle ka bara ho
    (product) => product?.title.toLowerCase().includes(search?.toLowerCase())
  ) 
  return (
   
   <>
   {/* <Parent/> */}

   <SearchBox search={search} setsearch={setsearch}/>
   {/* <Product searchText={search} />     */}
   {/* yaha or product ma is liye search ki state add ki ha q ka filter krte waqt cond lagae ga ka search ki hui text product ka sath match kare to show krwa dena */}
   <Product filtered={filtered} /> 
   </>
  )
}

export default Main
