import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import axios from 'axios'


let murl='http://localhost:3005/users';

 class Restapi extends Component {

    constructor()
    {
       super()
        this.state={
            userdata:['']
        }

    }

    loadapidata=async ()=>
{
    await axios.get(murl).then( (res)=> this.setState({ userdata: res.data }) );
}


    deleteUserdata=async (id)=>
{
    
    if( window.confirm(`Do you delete ${id} Data now?`) )
    {
        await axios.delete(`${murl}/${id}`); 

            this.loadapidata();
        
    }
}

    render() {
       
        return (<>
            <div className="container p-5">
            <h1 className="text-center ">Customer's info</h1>        
           
           
            <table className="table table-bordered table-striped">

                <thead className=" bg-dark text-white">
                    <tr>
                            <th>SNO</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>LOCATION</th>
                            <th colSpan="3" className="text-center">ACTION</th>
                    </tr>
                </thead>

                <tbody>
                { 
                this.state.userdata.map( (result, index)=>{ 
                    return(<tr key={index}>
                            <td>{ index+1 } </td>
                            <td>{ result.name} </td>
                            <td>{ result.email} </td>
                            <td>{ result.location} </td>
                            <td className="text-center"> <Link to={`/apidata/view/${result.id}`} className="btn btn-primary  ">View</Link> </td>
                            <td className="text-center"> <Link to={`/apidata/edit/${result.id}`} className="btn btn-info ">Edit</Link> </td>
                            <td className="text-center"> <button onClick={ ()=>this.deleteUserdata(result.id) } className="btn btn-danger ">Delete</button> </td>
                            
                        </tr>)
                })
            }
                </tbody>
            </table>


    </div>
                         </>)

               }
    componentDidMount()
    {
        this.loadapidata()
    }
}
export default Restapi;