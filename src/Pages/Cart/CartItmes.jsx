import React,{useContext} from 'react'
import { StoreContext } from '../../usetext/context';
export const CartItmes = (props) => {
   
    const {id,price,productName,productImage}= props.data;
    const {cartItems,addToCart,removeToCart,upToCart} = useContext(StoreContext)
    const cartItemAmount = cartItems[id];
  return (
        <div>


 <div className='cartpro' >
        <div className='des1' >
        <img className='image2' src={productImage}  />
        <h1>{productName}</h1>
        <h1>Price: <span>${price}</span> </h1>
        <div className='input' >
            
               
                <div className='input2' >
                <button  onClick={()=>addToCart(id) }   className='btn3'>+</button>
                <input  value={cartItemAmount} onChange={(e)=>upToCart(Number(e.target.value),id)} />
                <button  onClick={()=>removeToCart(id)} className='btn3' >-</button>
                </div>
        
        </div>
       

        </div>
     
      


        </div>
     





        </div>


   


   
     

  )
}
