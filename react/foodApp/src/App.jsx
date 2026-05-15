import Cards from './Cards'

function App() {

  const foodList = [
    {img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPPPyVm-Fg1KLTI1lxUvSF_OtQrWzjSEZMdw&s",
      title : "Chicken Biryani" , 
      price : "350Rs" ,
       quantity : 5 ,
        category : "lunch"},
    {img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuL2A6XJOBAFMQNGl8i-j-D_vBz9daNk-A1g&s",title : "Anda Partha" , price : "110.Rs" , quantity : 3 , category : "breakfast"},
    {img : "https://media-cdn.tripadvisor.com/media/photo-s/1c/ce/96/c1/barb-q-spacial.jpg",title : "Bar B.Q" , price : "450.RS" , quantity : 10 , category : "dinner"},
    {img : "https://thumbs.dreamstime.com/b/indian-meal-dal-chawal-consisting-rice-dallentil-90766343.jpg",title : "Daal Chawal" , price : "150.RS" , quantity : 4 , category : "lunch"},
    {img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTewtuZBvLsTfzqqjz0beqjcNDZN1nxx-Oi5w&s",title : "halwa pori" , price : "55.RS" , quantity : 15 , category : "breakfast"},
    {img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt8jX471UvqN0aLbhHF85r9m_KdsZh14OVdg&s",title : "Nihari" , price : "600.RS" , quantity : 2 , category : "dinner"},
    {img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Am7ORZHig1_Bl4wPPOGrAjAim_AkHTbAtw&s",title : "Kachori" , price : "360.RS" , quantity : 11 , category : "breakfast"},
    {img : "https://t4.ftcdn.net/jpg/05/70/71/99/360_F_570719935_U2NleaoiozbuSlDQvTr7OeA3SRB9OGv5.jpg",title : "Mandi" , price : "650.RS" , quantity : 14 , category : "dinner"},
    {img : "https://thumbs.dreamstime.com/b/spicy-chicken-haleem-fried-onion-spicy-chicken-haleem-fried-onion-naan-roti-served-dish-isolated-background-top-327626938.jpg",title : "Haleem" , price : "100.RS" , quantity : 9 , category : "lunch"}
  ]


  return (
    <>
<Cards foodList={foodList} />
    </>
  )
}

export default App
