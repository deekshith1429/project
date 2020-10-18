import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './css/Style.css'
//global api
//let url=`https://jsonplaceholder.typicode.com/users`;
//local api to global api
let url='http://localhost:3005/users';

class Userview extends Component {

constructor(props) {
    super(props)    

    this.state=
    {
        userdetails:''
    }
}

    //console.log(props.match.params.id);

render()
{
    //desctructuring
    const { id, name, url,mobile,a,b,c,d,e }= this.state.userdetails

    return (<>
        
        <div className="container p-5 mx-auto ">
        
    <div className="col-lg-4"><h1 >{mobile}</h1></div>
    
            <div className="col-lg-8">
            <div className="card border p-3 bg-light ">
                <div className="card-body">
                   <div className="row">
                   <div className="col-lg-4">  <img src= {url}/>   </div>

<div className="col-lg-6 list">
    <ul>
      <li> {a}</li>
        <li>{b}</li>
        <li>{c}</li>
        <li>{d}</li>
        <li>{e}</li>
    </ul>
    
</div>

                   </div>
                   <div className="text-center"><Link to={`/home`} className="btn btn-primary">Buy now</Link></div>
                </div>
            </div>
            </div>

            

                   



          

        </div>

    </>)

}//render 


componentDidMount()  //HTTP_RESTAPI_CALLS
 {
    
     axios.get(`${url}/${this.props.match.params.idno}`).then( (res)=> this.setState({  userdetails: res.data }) )
 }  

}


export default Userview;