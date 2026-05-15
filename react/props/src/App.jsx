import Navbar from "./Navbar"



function App() {


  var name = "Muhammad Ahad";

  console.log(name);
  
  const navLinks = ['Home','About','Services','Projects','Yasir','arsh e murad']

  return (
 <>
  <Navbar navLinks={navLinks} aptech={name}  batch="2309a" /> 
  </>




  )
}

export default App
