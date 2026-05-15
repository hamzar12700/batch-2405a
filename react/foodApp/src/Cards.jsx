import React, { useState } from 'react'

const Cards = ({ foodList }) => {

    // console.log(foodList);

    const [cardItem, setCardItem] = useState(foodList)

    // 
    // console.log(cardItem);


    function filteredData(category) {

        if (category === "all") {
            setCardItem(foodList)
        } else {
            const filtered = foodList.filter(items => items.category === category)
            setCardItem(filtered)
        }

    }



    return (

        <>

            <button onClick={() => filteredData('all')}>All</button>
            <button onClick={() => filteredData('breakfast')}>Breakfast</button>
            <button onClick={() => filteredData('lunch')}>Lunch</button>
            <button onClick={() => filteredData('dinner')}>Dinner</button>

            <div className='container'>
                {cardItem.map((items, index) => {
                    return <div className='cards' key={index}>
                        <img src={items.img} alt="" />
                        <h1>{items.title}</h1>
                        <h2>{items.price}</h2>
                        <h3>Quantity:  <span style={{ color : items.quantity < 5 ? "red" : "black" }}> {items.quantity} </span></h3>
                        <h4>{items.category}</h4>
                        <p>{items.quantity >= 10 ? "20% Discount" : ""}</p>
                        {/* <p>{items.quantity >= 10 ? "20% Discount" : ""}</p> */}
                    </div>
                })}
            </div>
        </>
    )
}

export default Cards