import React from 'react'

const Box3 = ({hobbies}) => {
  return (
    <>
    <h3>Box3</h3>
    <h2>{hobbies.map((item)=>{
        console.log(item);
        
        return <p >{item}</p>
    })}</h2>
    </>
  )
}

export default Box3