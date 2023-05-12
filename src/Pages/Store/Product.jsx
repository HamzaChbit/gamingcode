import React, { useContext } from 'react'
import { StoreContext } from '../../usetext/context';


export const Product = (props) => {


 const {id,price,productName,productImage}= props.product;
 const {addToCart,cartItems} = useContext(StoreContext);
 const cartItemAmount = cartItems[id];
  return (
    <div  className='div' >
      <h1  className='title1' >{productName}</h1>
      <img className='images' src={productImage} />
      <p className='price' >${price}</p>
      
      
     <button  className='btn2'  onClick={()=>addToCart(id) }      >
         ADD TO CART  {cartItemAmount>0 && <>({cartItemAmount})</>}
        </button>
    
   
      
    </div>
  )
}
