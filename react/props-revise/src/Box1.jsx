import React from 'react'

import ShopingCart from './ShopingCart';

const Box1 = ({suits }) => {

        
 
  return (
    <div>
        {/* <h1>{id}</h1>
        <h1>{name}</h1>
        <h1>{batch}</h1>
        <h1>{campus}</h1> */}
        
        {/* <button onClick={foo}>clicked</button> */}
        {/* <Box2 hobbies={hobbies} /> */}
<div className='container' > 

        {suits.map((items)=>{
            return <ShopingCart color="red" title={items.title} price={items.price} quantity={items.quntity} img={items.img} />
            
        })}
        </div>
    </div>
  )
}

export default Box1