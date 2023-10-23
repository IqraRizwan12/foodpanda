import { useNavigate } from 'react-router-dom'
import { signin } from '../config/firebase'

function Signin(){
    const navigate = useNavigate()
    const login = async () =>{
        try{
        await signin()
        navigate('/')
    
        }catch(e){
            alert(e.message)
        }
    
    }
    return(
        <div style={{border:'1px solid black'}}>
            <h1>Welcome</h1>
            <h4>Login to Continue</h4>
            <button onClick={login}>Continue With Google</button>
             
        </div>
    )
}

export default Signin