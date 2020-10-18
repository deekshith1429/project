import React, { Component } from 'react';
import './css/Home.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

let murl='http://localhost:3005/users';

class Home extends Component {
  constructor()
  {
     super()
      this.state={
          localdata:['']
      }

  }
  render() {
       
    return (<>
      <h1>Mobile phones </h1>
      <div className="container p-5">
      <div className="row">
        
            {
           this.state.localdata.map((result)=>
           {
               return(<>
               <div className="col-lg-3">
                 <div className="card shadow" >
                   <img src={result.url}/>
                   <div className="card-body">
               <div className="card-title text-center"><b>{result.mobile}</b></div>
               <p className="text-center"><b>&#8377;{result.pricecut}</b> <s>{result.price}</s></p>
               <div className="text-center"><Link to={`/home/${result.id}`} className="btn btn-primary ">Buy now</Link></div>
                   </div>
                 </div>
               </div>

     
                    
     
               
             </> )

           }
           
           )
            }
        </div>
        </div>
   </> )
}
componentDidMount()
{
    axios.get(murl).then((res)=>this.setState({localdata:res.data}));
}
}
export default Home;