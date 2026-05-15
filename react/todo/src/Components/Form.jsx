import React, { useState } from 'react'

const Form = ({setItem , item}) => {

    const [input, setInput] = useState("")
    const [quantity, setQuantity] = useState(1)

function submitHandler() {
    // console.log(input);

    const data = {
        name : input,
        quantity : quantity,
        isComplete : false
    }

    setItem([...item , data])
    setInput("")
    setQuantity(1)
    
}


  return (
    <div>
        <select name="" id="" value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <input value={input}
        onChange={(e)=>setInput(e.target.value)}
        type="text" placeholder='enter your task......' />
        <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Form