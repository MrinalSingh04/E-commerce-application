import React, { useContext } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import {SidebarContext} from '../contexts/SidebarContext'
import {CartContext} from '../contexts/CartContext'
import CartItem from './CartItem'
import {Link} from "react-router-dom"

export default function Sidebar(){

  const {cart, deleteFromCart, total, itemAmount} = useContext(CartContext)

  const {isOpen, handleClose} = useContext(SidebarContext)

    return(
<div 
    className={`${isOpen? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
        
    <div 
       className="flex justify-between items-center py-3.5 border-b">
      <div 
        className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>

          {/* icon */}

          <div 
          onClick={handleClose} 
          className="cursor-pointer w-8 h-8 flex justify-center items-center">
            <IoMdArrowForward 
            className="text-xl" />
      </div>
    </div>
      
     {
      cart.length>0 ? (
        <div className="flex flex-col gap-y-2 h-[400px] lg:h-[430px] overflow-y-auto border-b">
        {
          cart.map((item)=> {
             return <CartItem item={item} key={item.id} />
          })
        }
      </div>
      ) : (
      <h1 className="mt-14 mb-10 text-slate-600 text-center text-4xl font-bold drop-shadow-lg">No Items Yet</h1>
      )
     }

     <div>
        <div className="flex justify-between items-center mt-3.5 px-6">
          {/* Total */}
          <div className="font-semibold text-[15px] ">
            <span>Total:</span> $ {parseFloat(total).toFixed(2)}
          </div>
          {/* Clear Cart */}
          <div onClick={()=> deleteFromCart()} className="cursor-pointer bg-red-500 h-9 w-9 flex justify-center items-center rounded-lg text-white">
            <FiTrash2 className="text-xl" />
          </div>
        </div>

     <div className="flex flex-col mt-3 gap-y-3">
     <Link className="bg-gray-200 text-sm w-full font-medium p-3 flex justify-center items-center" to="/product">
      View Products
     </Link>
     <Link className="bg-[#333] text-white w-full font-medium text-sm p-3 flex justify-center items-center">
      Checkout
     </Link>
     </div>

     </div>
</div>
    )
}
