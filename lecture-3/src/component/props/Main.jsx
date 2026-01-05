import React from 'react'
import Card from './Card'

const Main = () => {
  const variation={sm:50,lg:75,xl:100}  //variable ka thorugh bhi obj ko pass krwa sakta ha
  return (
   <>
   <h1>Main component</h1>
 <Card name="Shampo" 
 price={45} 
 variation={{variation}}
 colours={["pink" ,"blue","black"]}
 />
 <Card name="shoes"/>
 <Card name="shurt"/>

 {/*  */}
 <Card title="Laptop" price="50000" />;
   </>
  )
}

export default Main
