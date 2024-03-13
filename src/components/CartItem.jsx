import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import {IoMdClose, IoMdAdd, IoMdRemove} from "react-icons/io"
import { CartContext } from "../contexts/CartContext";

export default function CartItem({item}){

    const {removeFromCart,increaseAmount,decreaseAmount} = useContext(CartContext)

    // destructure item
    
    const {id,title,image,price, amount} = item;

    return(
        <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500 ">
           <div className="w-full min-h-[150px] flex items-center gap-x-4">
            {/* Image */}
            <Link to={`/product/${id}`}>
                <img className="max-w-[80px]" src={image} alt="" />
            </Link>
            <div className="w-full flex flex-col">
                {/* title & remove icon */}
                <div className="flex justify-between items-center">
                    <Link className="text-sm text-[13px] uppercase font-medium max-w-[240px] text-primary hover:underline" to={`/product/${id}`}>
                       {title}
                    </Link>
                    {/* remove Icon */}
                    <div onClick={()=> removeFromCart(id)} className="text-xl cursor-pointer">
                        <IoMdClose className=" transition hover:text-red-500" />
                    </div>
                </div>
                <div className="h-[36px] flex gap-x-2 text-sm items-center">
                    {/* qty */}
                     <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium"> 
                        {/* minus icon */}
                        <div onClick={()=> decreaseAmount(id)} className="flex-1 flex justify-center items-center cursor-pointer h-full">
                        <IoMdRemove />
                        </div>
                        <div className="h-full flex justify-center items-center px-2">
                        {amount}
                        </div>
                        <div onClick={()=> increaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                        <IoMdAdd />
                        </div>
                     </div>
                    {/* item price */}
                    <div className="flex-1 flex items-center justify-around">$ {price}</div>
                    {/* final price */}
                    <div className="flex-1 flex justify-end items-center text-black font-medium">{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
                </div>
            </div>
           </div>
        </div>
    )
}