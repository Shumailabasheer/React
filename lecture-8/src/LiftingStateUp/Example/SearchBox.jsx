import React, { useRef, useState } from 'react'

const SearchBox = ({search,setsearch}) => {
    
  return (
   <>
   <input
        type="text"
        placeholder='Search Product...'
        value={search}
        onChange={(e) => setsearch(e.target.value)}

    />
    {/* <button onClick={productsearch}>Search</button> */}
   </>
  )
}

export default SearchBox
