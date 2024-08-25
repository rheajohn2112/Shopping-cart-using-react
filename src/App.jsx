import Navbar from "./Components/Navbar"
import Cards from "./Components/Cards"
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Describe from "./Components/Describe"
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import { useState } from "react"
import "./App.css"
import Footer from "./Components/Footer"



function App() {
  

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter(item => item !== itemToRemove));
};
 const [search, setSearch]=useState('');

  

  const router = createBrowserRouter([
    {
     path: "/",
     element: <><Navbar placeholder="Search"/><Home/></>
    },
    {
     path: "/shop",
     element: <><Navbar placeholder="Search" setSearch={setSearch}/><Cards search={search}/></>
    },
    {
      path: "/Describe/:id",
      element: <><Navbar placeholder="Search"/><Describe addToCart={addToCart}/></>
    },
    {
      path: "/cart",
      element: <><Navbar placeholder="Search"/><Cart cart={cart} removeFromCart={removeFromCart}/></>
    }
    
])

  return (
    <>
      <RouterProvider router={router} />
      <Footer/>
     
     
    </>
  )
}

export default App
