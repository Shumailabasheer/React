import React from 'react'

// const Card = (props) => {    //valu kisi bhi name sy la ga parameter ka under
//   return (
//    <>
//    <h1>my card</h1>
//    <h3>{props.name}</h3>
//   <ul>
//   <li>
// price:{props.price || "free"} 
//   </li>
//   </ul>
//    </>
//   )
// }

// export default Card


/////=================destructoring====================//

const Card = ({name,price,variation, colours,title}) => {    //valu kisi bhi name sy la ga parameter ka under
  return (
   <>
   <h1>my card</h1>
   <h3>{name}</h3>
  <ul>
  <li>
price:{price || "free"}
  </li>
  </ul>
   <h2>{title}</h2>
      <p>{price}</p>


  {/*list ko print krna ha ===== map() */}
  {
        colours ? <h3>Colours:</h3>: ""    //is name ko bhi optional ma rakhna ha 
      }


      <ul>
        {
          colours ? colours?.map((colour, index) => (     //trenary operator use kiya ha
            <li key={index} >{colour}</li>
          ))
            : ""
        }
      </ul>
      <hr />


   </>
  )
}

export default Card
