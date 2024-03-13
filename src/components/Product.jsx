import React, {useContext} from "react";
import {Link} from 'react-router-dom'
// imporing icons
import { IoEyeOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import {CartContext} from '../contexts/CartContext'

export default function Product({product}){

    const {addToCart} = useContext(CartContext)

    // destructure product

    const {id,image,category,title,price} = product;
    
    return(
        <div>
            <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
            <div className="w-full h-full flex justify-center items-center">
                {/* Image */}
                <div className="w-[200px] mx-auto flex justify-center items-center">
                    <img className="max-h-[160px] group-hover:scale-110 transition duration-300" src={image} alt="" />
                </div>
            </div>
            {/* Buttons */}
            <div className="absolute top-6 right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button onClick={()=> addToCart(product, id)}>
                    <div className="flex justify-center items-center text-white w-9 h-9 bg-red-500">
                        <FaPlus className="text-xl" />
                    </div>
                </button>
                <Link to={`/product/${id}`} className="w-9 h-9 bg-white flex justify-center items-center text-primary drop-shadow-lg">
                  <IoEyeOutline className="text-xl" />
                </Link>
            </div>
            </div>
        {/* category, title and price */}
            <div>
                <div className="text-sm capitalize text-gray-500 mb-1">
                    {category}
                </div>
                <Link to={`/product/${id}`}>
                <h2 className="font-semibold mb-1">{title}</h2>
                </Link>
                <div className="font-semibold">$ {price}</div>
            </div>
        </div>
    )
}