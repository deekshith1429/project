import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

let url=`http://localhost:3005/users`;

class view extends Component {

constructor(props) {
    super(props)    

    this.state=
    {
        userdetails:''
    }
}

  

render()
{
    
    const { id, name, email, location, course, phone }= this.state.userdetails

    return (<>
        
        <div className="container p-5">

    <h1 className="py-3 text-center">Customer Profile</h1>    

                <table className="table table-bordered w-50 mx-auto ">

                    <tbody>
                        
                        <tr>
                            <th>ID</th> 
                            <td>{ id }</td>
                        </tr>

                        <tr>
                            <th>NAME</th> 
                            <td>{ name }</td>
                        </tr>

                        <tr>
                            <th>EMAIL</th> 
                            <td>{ email }</td>
                        </tr>

                        <tr>
                            <th>LOCATION</th> 
                            <td>
                                { location }
                            </td>
                        </tr>

                       

                        <tr>
                            <th colSpan="2" className="text-center">   <Link to={`/apidata`} className="btn btn-primary">Goback</Link> </th>
                        </tr>

                    </tbody>
                </table>



          

        </div>

    </>)

}//render 


componentDidMount()  //HTTP_RESTAPI_CALLS
 {
    
     axios.get(`${url}/${this.props.match.params.idno}`).then( (res)=> this.setState({  userdetails: res.data }) )
 }  

}


export default view;