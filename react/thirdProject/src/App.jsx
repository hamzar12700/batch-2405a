function App() {

// const  greet = (a,b) =>{
//   console.log(a+b);
//   alert("Assalam o Alaikum subha bakhair !!!!1")
// }


// function inputValues(event) {
//   console.clear()
//   console.log("Values :",event.target.value);
  
// }


const food = ['beef biryani','halwa pori','mandi','karhai'];

const foodItem = [{
  title : "beef biryani",
  price : "400 Rs",
  quantity : "1Kg"
},{
  title : "halwa pori",
  price : "50 Rs",
  quantity : "1 Poori"
},{
  title : "karhai",
  price : "1,200",
  quantity : "1 kg"
}]


  return(
    <div>

{/* {food.map((items)=>{
  console.log(items);
  
})} */}


{foodItem.map((item , i)=>{
// console.log("item =====>>",item.title);
// console.log("item =====>>",item.quantity);
// console.log("index ====>",i);
return <div className="box">
  <h1>{item.title}</h1>
  <h2>{item.price}</h2>
</div>



})}


   {/* <h1>Hello world</h1>
   <h2>Muhammad Hamza</h2>
   <h3>Abdul Ahad</h3>
   <input type="text"  placeholder="enter your name" onChange={inputValues} />
   <button onClick={()=>greet(2,3)} >Clicked</button> */}
    </div>
)}

export default App