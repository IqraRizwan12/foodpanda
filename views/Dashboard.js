import { postRestaurants } from "../config/firebase"
import { useNavigate } from 'react-router-dom'
import { getRestaurants } from "../config/firebase"
import {useState,useEffect} from 'react'

function Dashboard(){
    const [restaurants, setRestaurants] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () =>{
        const addData = await getRestaurants()
        setRestaurants(addData)
        setLoading(false)
    }

    
   return(
    <div>
         {loading ? <center><img src="https://i.gifer.com/ZKZg.gif" width='20' /></center> : restaurants.map(item=>{
            return <div onClick={()=>navigate('/' + item.id)} style={{ display: "inline-block", width: '25%', border: '1px solid black', margin: '20px', height: '100%', padding: '5px' ,backgroundColor:'deeppink',textAlign:'center',color:'white'}}>
                <h2>{item.restaurant_name}</h2>
                <h4>Contact: {item.phone}</h4>
                <h4>{item.cuisine_type}</h4>
                <h4>{item.address.city}</h4>
            </div>
        })}
    </div>
   )

}

export default Dashboard