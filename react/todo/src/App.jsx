import React, { useState } from 'react'
import Form from './Components/Form'
import FormList from './Components/FormList'

function App() {

  const [item, setItem] = useState([])

  
  return (
    <div>
      <Form setItem={setItem} item={item}/>
      <FormList item={item} setItem={setItem} />
    </div>
  )
}

export default App