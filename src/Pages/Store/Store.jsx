import React from 'react'
import './Store.css'
import {PRODUCTS} from "../../products"
import { Product } from './Product'

export const Store = () => {



  return (
    <div className='store' >
      <div className='product'>
          {PRODUCTS.map((product)=>(
             <Product product={product} />
          ))}
        
       
      </div>
    </div>
  )
}
