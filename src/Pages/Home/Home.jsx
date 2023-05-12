import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import Casque from "../../image/pngegg.png"


export const Home = () => {
  return (
    <div className='Home' >
      <div  className='para'  >
        <h1>Best <span>Pro Gaming</span> Accessories</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae voluptates quidem provident dolorem nobis dolorum commodi vitae eligendi odio sequi molestias fuga nam placeat blanditiis, repellat ipsum perspiciatis alias! Natus!</p>
        <div  className='btn1'>
            <Link to={"/Store"}  >
          Store
        </Link>
        
        </div>
      </div>
      <div  className='img'>
      <img src={Casque} />
      </div>
      
         
    </div>
  )
}
