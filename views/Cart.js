import {getProductDetail} from '../config/firebase'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Cart(){

    const [addItems,setAddItem] = useState([])
   
    

   
   
   
    return <div>
      <h1>Your Cart</h1>
      <p>Start adding items to your cart</p>
      <hr/>
      <h2></h2>
    </div>
}
export default Cart