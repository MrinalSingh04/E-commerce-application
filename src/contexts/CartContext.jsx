
import React, { createContext, useEffect, useState } from "react";
// Create Context

import toast from "react-hot-toast"

export const CartContext = createContext()

export default function CartProvider({children}){
    // cart state

    const [cart, setCart] = useState([])

  // Item Amount State

  const [itemAmount, setItemAmount] = useState(0)

  // total price state

  const [total, setTotal] = useState(0)

  useEffect(()=> {
    const total = cart.reduce((accumulator,currentItem)=> {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
    setTotal(total)
  })

  // Update item amount

  useEffect(()=> {
    if(cart){
      const amount = cart.reduce((accumulator, currentItem)=> {
        return accumulator + currentItem.amount
      }, 0)
      setItemAmount(amount)
    }
  }, [cart])

    const addToCart = (product,id) => {
      toast.success("Added To Cart")
     const newItem = {...product, amount: 1}
    //  check if the item is already in the cart

    const cartItem = cart.find(item=> {
      return item.id === id
    })

    // if cart item is already in the cart

    if(cartItem){
      const newCart = [...cart].map((item)=> {
        if(item.id === id){
          return {...item, amount: cartItem.amount + 1}
        } else {
          return item;
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
    }

    const removeFromCart = (id) => {
      const newCart = cart.filter((item)=> {
        return item.id !== id;
      })
      setCart(newCart)
    }

    const deleteFromCart = (id) => {
      setCart([]);
    }

    // increase amount

    const increaseAmount = (id) => {
       const cartItem = cart.find((item) => item.id === id)
       addToCart(cartItem,id)
    }

    const decreaseAmount = (id) =>{
      const cartItem = cart.find((item)=> {
        return item.id === id
      })
      if(cartItem){
         const newCart = cart.map((item)=> {
          if(item.id === id){
            return {...item, amount: cartItem.amount - 1}
          } else {
            return item
          }
         })
         setCart(newCart)
      }
        if(cartItem.amount < 2){
          removeFromCart(id)
        }
    }


    return(
      <CartContext.Provider value={{total,itemAmount,cart,addToCart, removeFromCart, deleteFromCart,increaseAmount, decreaseAmount}}>
      {children}
    </CartContext.Provider>
    )
}