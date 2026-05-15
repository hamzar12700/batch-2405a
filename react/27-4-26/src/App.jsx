import React, { useState } from 'react'
import Box1 from './Box1';

const App = () => {

  const [show , setShow]=useState(false)

  const [data , setData]=useState({
    name : "hamza",
    batch : "2405a",
  })

console.log(show);


  return (
    <div>

<div>
<h1>{data.name}</h1>
<h1>{data.batch}</h1>

</div>

<Box1 show={show} setShow={setShow} />

    </div>
  )
}

export default App