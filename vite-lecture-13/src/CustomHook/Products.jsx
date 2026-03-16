import React from 'react'
import useFetch from './useFetch'

const Products = () => {
const {data,loading,error}=useFetch("https://dummyjson.com/products") 
// console.log(data)
if(loading){
  return <h1>Loading....</h1>}
if(error){
  return <h1>{error || "Masly hi Masly"}</h1>}


  return (
   <>
    {data?.products?.map((p,i)=>(
      <h1 key={i}>{p.title}</h1>
    ))}
   </>
  )
}

export default Products
