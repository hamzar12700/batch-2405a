import React from 'react'

const ShopingCart = ({title , price , quantity , img , color}) => {

    var shopingCarts = {
        // disply : "flex",
        height : "100px",
        width : "100px",
        border : "1px solid black",
        backgroundColor : "black"

    }


  return (
    <div style={{height : "100px" , width :"100px" , border :"1px solid black"}}>
        <img src={img} alt="" />
        <h1 style={{color : color}}>Title : {title}</h1>
        <h1>Price : {price}</h1>
        <h1>Quantity : {quantity}</h1>
    </div>
  )
}

export default ShopingCart