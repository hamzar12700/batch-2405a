import React from 'react'
import Box1 from './Box1';

const App = () => {

  // name = "ahad"

  const suits = [
    {
      img : "https://eminence.pk/cdn/shop/files/CopyofDSC04304.jpg?v=1709822023",
      title : "mens kameez shalwar",
      price : "1,300Rs",
      quntity: 10
    },
    {
      img : "https://i.pinimg.com/736x/97/48/ab/9748ab72ce13282a780577fb38b50de6.jpg",
      title : "women kameez shalwar",
      price : "1,500Rs",
      quntity: 3
    },
    {
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYcY2I5PQH64XdFWCI123CnhURp0yBrrt6A&s",
      title : "kids kameez shalwar",
      price : "2,00Rs",
      quntity: 2
    },
    {
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWhwhNEfZdKO_u6hU2foAuqee5aRCmyMLvg&s",
      title : "abaya",
      price : "3,000",
      quntity: 15
    },
    {
      title : "sherwani",
      price : "5,00Rs",
      quntity : 1
    }
  ]


  function foo(){
    alert("welcome to our website")
  }

  const hobbies = ['cricket','swiming','avoid coding']

  return (
    <div>
    <Box1 suits={suits} />
    </div>
  )
}

export default App