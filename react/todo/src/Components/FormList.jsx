import React, { useState } from 'react'

const FormList = ({ item, setItem }) => {


    // const [check, setCheck] = useState(false)



    // console.log(check);



    function completeHandler(i) {
        const complete = item.map((item , index)=>{
            
            return i === index ? {...item, isComplete : !item.isComplete } : item
        })
        setItem(complete)
    }
    

    function deleteHandler(ahad) {
        const filtered = item.filter((item, index) => {
            return index !== ahad
        })
        setItem(filtered)
    }


    return (
        <div>
            {

                item.length === 0 ? <p>No Items Found</p> : (

                    item.map((item, index) => {
                        return <div className='cards'>
                            {/* <p>{index}</p> */}
                            <input  type="checkbox"  onClick={()=> completeHandler(index)} />
                            <h1>{item.quantity}</h1>
                            <h1 style={{ textDecoration : item.isComplete ? "line-through" : ""}} >{item.name}</h1>
                            <button
                                onClick={() => deleteHandler(index)}
                                style={{ backgroundColor: "red", color: "white", borderRadius: "10px", border: "none" }}>
                                Delete</button>
                        </div>
                    })

                )

            }
        </div>
    )
}

export default FormList