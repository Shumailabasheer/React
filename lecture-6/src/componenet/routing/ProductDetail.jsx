// import { prettyDOM } from '@testing-library/dom';
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';

const ProductDetail = () => {
const {id} = useParams();      //id is liye likhi ha q ka hum na id sy URL pass krwaya ha post.jsx ma

  const [post, setPost] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      console.log(data)
      setPost(data);


    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [])
  return (
   <>
{
  Array.isArray(post.images) ? (
<img src={post.images[0]} alt="" />
  ):(
 <img src={post?.thumbnail} />
  )
}
    <h2>{post?.title}</h2>
    <p>{post.description}</p>
    <p>Price: ${post?.price}</p>

   </>
  )
}

export default ProductDetail
