import React, { useState, useContext} from "react";
import logopng from "../components/logo.svg"
import {Link} from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { SidebarContext } from "../contexts/SidebarContext";
import {CartContext} from '../contexts/CartContext'

export default function Header(){

    const {itemAmount} = useContext(CartContext)

  const {isOpen,setIsOpen} = useContext(SidebarContext)

  const [isToggle, setisToggle] = useState(false)

  const toggle = () => {
    setisToggle(!isToggle)
  }


    return(
        <>
        <nav 
        className="px-10 text-[15px] sticky top-0 drop-shadow-md flex justify-between items-center w-full bg-white h-[70px]">

            <Link 
            to="/">
            <img 
            className="w-[30px]" src={logopng} />
            </Link>

            <div 
            className="hidden md:flex md:items-center md:gap-4">

            <Link 
            className="font-semibold" to="/">
            Home
            </Link>

            <Link 
            className="font-semibold" to="/product">
            Products
            </Link>

            <Link 
            className="font-semibold" to="/contact">
            Contact Us
            </Link>

            <Link 
            onClick={()=> setIsOpen(!isOpen)} 
            to="/">
            <FiShoppingCart 
            className="text-xl" />

            <p 
            className="text-white text-[12px] flex justify-center items-center absolute transform translate-x-[60%] translate-y-[-180%] h-[18.5px] w-[20px] bg-red-500 rounded-full">{itemAmount}</p>
            </Link>

            <button 
            className="hidden md:block px-3 py-2 bg-[whitesmoke] text-black font-semibold hover:transition-all duration-200 rounded-lg">Login</button>

            <button 
            className="hidden md:block px-3 py-2 bg-[whitesmoke] text-blackk font-semibold duration-200 rounded-lg">Register</button>

            </div>

            <div 
            className="md:hidden">

            <button 
            onClick={toggle} 
            className="text-3xl font-bold relative top-1 right-2">
                {isToggle? <IoClose className="relative left-1" /> : <HiMenu />}
            </button>
            </div>  
        </nav>

        {
            isToggle && (
            <div 
            className="mt-[2px] w-full h-[90vh] flex flex-col justify-center items-center">

             <Link 
             className="font-semibold my-5 text-3xl" to="/">
                Home
            </Link>

            <Link 
            className="font-semibold my-5 text-3xl" to="/product">
                Products
            </Link>

            <button 
            className="my-3 text-3xl px-5 py-4 text-black bg-[whitesmoke] font-semibold hover:transition-all duration-200 rounded-lg">Login</button>

            <Link 
            onClick={()=> setIsOpen(!isOpen)}  
            className="my-5 text-3xl" to="/cart">
            <FiShoppingCart />

            <p 
            className="text-white text-[14px] flex justify-center items-center absolute transform translate-x-[80%] translate-y-[-190%] h-[25px] w-[25px] bg-red-500 rounded-full">{itemAmount}</p>

            </Link>

            <Link 
            className="font-semibold my-5 text-3xl" to="/contact">
            Contact Us
            </Link>

            </div>  
            )
        }
        </>
    )
}