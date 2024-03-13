import React, { useContext } from 'react'
import {ProductContext} from '../contexts/ProductContext'
// import components

import Product from './Product'


export default function Products(){

    const {products} = useContext(ProductContext)

    // getting only men's and women's clothing category..

    const filteredProducts = products.filter((item)=> {
        return (
            item.category === "men's clothing" || item.category === "women's clothing"
        )
    })

    return(
        <>
        <section className='p-14'>
            <div className="container mx-auto">
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                {
                    filteredProducts.map(product=> {
                        return <Product product={product} key={product.id} />
                    })
                }
               </div>
            </div>
        </section>
        </>
    )
}