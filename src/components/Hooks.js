import React,{useState,useEffect} from 'react'
import axios from 'axios'
let url='https://jsonplaceholder.typicode.com/users';

const Hooks=()=> {
    const [user,setUser] = useState([]);

    useEffect(() => {
       axios.get(url).then((res)=>setUser(res.data))
       
    }, [])

    return(<>
    <h3>hooks data</h3>

    {
        user.map((result)=>
        {
            return(
                <p>{result.id}</p>   
            )
        }

            )
       
    }
    </>)
        
          
                
            
            
        
                

}
export default Hooks