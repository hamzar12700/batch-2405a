import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import NotFound from "./Pages/NotFound"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Contact from "./Pages/Contact"
import Product from "./Pages/Product"


function App() {

  return (
    <>

<Navbar/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/services" element={<Services/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/product/:id" element={<Product/>} />
  <Route path="*" element={<NotFound/>} />
</Routes>
<Footer/>
     </>
  )
}

export default App
