import React from 'react'
 import { Link } from 'react-router-dom'
 import { ShoppingCart} from "@phosphor-icons/react";
 import './navbar.css'

export const Navbar = () => {
  return (
    <div   className='Navbar' >
      <div className='Link' >
      <Link  to={"/"} >Home</Link>
        <Link to={"/Store"}  >
          Store
        </Link>
      
      </div><div  className='gaming' > <Link  to={"/"} >Gaming</Link></div>
        <div  >  <Link to={"/Cart"}  className='main'>
      <ShoppingCart size={40} className="icon" />

    </Link>
  </div>
     
   
       
    </div>
  )
}
