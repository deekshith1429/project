import React, { Component } from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom';

let url=`http://localhost:3005/users`;


class Useredit extends Component {

    constructor(props) {
        super(props)
    
        this.state = {}


    }

//name input textbox collection
forminputHandler=(e)=>
{
    this.setState({ ...this.state, [e.target.name]:e.target.value} )
}


async componentDidMount()  //HTTP_RESTAPI_CALLS
 {
     await axios.get(`${url}/${this.props.match.params.idno}`).then( 
         (res)=> this.setState(res.data) )
 }  



   //Get form data after submit 
   submitHandler=async (event)=> {

    //control page loading after submit Formdata
    event.preventDefault();
   
   await axios.put(`${url}/${this.props.match.params.idno}`,this.state)
   .then( ()=> this.props.history.push('/apidata') );

} 



    render() {
        
      const { name,email,location,course,phone }=this.state


        return (<>
             <div className="container pt-5">
                
                <h3 className="text-center pb-3">Edit form</h3>
                    
                <form className="w-50 mx-auto" onSubmit={ this.submitHandler }>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                        type="text" 
                        className="form-control"
                        name="name" 
                        value={name}
                        onChange={ this.forminputHandler.bind(this) } />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input 
                        type="text" 
                        className="form-control"
                        name="email" 
                        value={email} 
                        onChange={this.forminputHandler.bind(this) } />
                    </div>


                    <div className="form-group">
                        <label>Location</label>
                        <input 
                        type="text" 
                        className="form-control"
                        name="location" 
                        value={location} 
                        onChange={this.forminputHandler.bind(this) } />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Update</button> &nbsp;&nbsp;
                        <Link to={`/apidata`} className="btn btn-info">Goback</Link>
                    </div>


                </form>




            </div>
        </>)
    }
}

export default Useredit;
