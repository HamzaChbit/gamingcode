import React,{ useContext } from 'react'
import { PRODUCTS } from '../../products'
import { StoreContext } from '../../usetext/context';
import { CartItmes } from './CartItmes';
import { useNavigate } from 'react-router-dom';
import sala from '../../image/55.png'

import './Cart.css'
export const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(StoreContext)
const nagivte = useNavigate();
const totalprice =  getTotalCartAmount();


const mystyle = {
  color: "white",
  display:' flex',
  marginTop :'100px',
  padding: "10px",
  display :'flex',
  justifyContent: "center",
  alignItems: "center",
  flexDirection : 'column',



}
const cssimage = {
  width : "450px",
  height : '350px',

}









  return (
    <div  className='item' >  

    <div  className='item2' > <h1  className='title3' >   <span>Your</span>  Item</h1></div>
      <div  className='cartitem' >
     <div>  {PRODUCTS.map((product)=>{
          if(cartItems[product.id]!==0){
            return <CartItmes   data={product} />
          }
          
        }

        )}             </div>

      
{totalprice >0 ?
       <div  className='checkout'   > 
          <div>    <h1>TOTAL : ${totalprice}</h1></div>
      <div  className='btn10' > <button  >checkout</button>
<button  onClick={()=> nagivte("/Store")}  >Go to Shopping</button></div>

</div>      
: <h1 style={mystyle}>   <img   style={cssimage}  src={sala}/>Your Cart is Empty </h1> 
 }

</div>    

</div>
    




  
    

  )
}
