import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import Products from "./components/Products"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <div className="overflow-hidden">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  )
}

export default App
