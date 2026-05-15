import React from 'react'

const Box1 = ({ show, setShow }) => {
    return (
        <div>
            <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
            {show && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis corrupti non nihil consequuntur? Molestias fugiat odio magni molestiae esse architecto.</p>}
        </div>
    )
}

export default Box1