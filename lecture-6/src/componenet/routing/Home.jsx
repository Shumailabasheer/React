import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Home = () => {
const [post,setpost]=useState([]);

  const fetchData = async()=>{
    try{
      const rest = await fetch('https://dummyjson.com/recipes')
     const data = await rest.json();
    //  console.log(data)
 setpost(data.recipes);            //hume data post ka under chahiye setpost ,fetch ho kr jo data ae ga usy iska under show krwa 


    }catch(error){
console.log(error)
    }
  }
 
  
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <>
    <div className="container-xxl my-5 d-flex justify-content-center gap-4 flex-wrap">    
{
  Array.isArray(post) &&  post?.map((p,i)=>(
       <Card key={i+p.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={p.image}/>
      <Card.Body>
        <Card.Title>{p.cuisine || "card tittle"}</Card.Title>
        <Card.Text>{p.ingredients.slice(0,3)+"..." || "Ingredients"}</Card.Text>
        <Card.Text>{p.instructions.slice(0,1)+"..."}</Card.Text>
         <Card.Text>{p.name || "Name"}</Card.Text>
        
        <Button variant="primary">ReadMore</Button>
      </Card.Body>
    </Card>
    ))
}
     

    </div>
    </>
  )
}

export default Home
