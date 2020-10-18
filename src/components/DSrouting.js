import React from 'react'
import {BrowserRouter, Route,Switch, Link } from 'react-router-dom'
import './css/Style.css'

import Pet from './Pet.js'
import Subs from './Subs.js'
import Exchange from './Exchange.js'

 const DSrouting=(props)=> {
    // console.log(props)
    return (<div className=" container-fluid mycolour">
        <BrowserRouter>

        <div className="qwe">
        <ul className="nav justify-content-center bg-dark ">
  <li className="nav-item">
  <Link className="nav-link text-white " to={`${props.match.url}/Pet`}> Tree Wallpaper </Link>
  </li>
  <li className="nav-item ">
  <Link className="nav-link text-white" to={`${props.match.url}/subs`}>Hills Wallpaper</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link text-white " to={`${props.match.url}/Exchange`}>Snow Hills wallpaper</Link>
  </li>
  
</ul>
        </div>
        <div className="container py-5">
            
      

            <div className="row">



<div className="col-lg-2"></div>
                
                 <div className="col-lg-8"> 
                 
                <Switch>
                 <Route exact path={`${props.match.url}`} component={Pet} />
                 <Route path={`${props.match.url}/Pet`} component={Pet}/>
                 <Route path={`${props.match.url}/subs`} component={Subs}/>  
                 <Route path={`${props.match.url}/Exchange`} component={Exchange}/>   
                 </Switch>
                 
                 </div> 

                 <div className="col-lg-2"></div>           
                 </div>


        </div>
        </BrowserRouter>
       
        <div className="container-fluid" >
      <div className="container p-5 text-center ">

          <div className="row">


  <div className="col-lg-4 ">
    <div className="card   " >
    <img src="img/tajmahal.jpg" class="card-img-top" alt="card image cap"/>
    <div className="card-body">
    <Link to={`/DSroute/tajmahal`}><h3 >Tajmahal</h3></Link>
      <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
    </div>
    </div>
  </div>

  <div className="col-lg-4">
    <div className="card  " >
    <img src="img/pyramid.jpg" class="card-img-top" alt="card image cap"/>
    <div className="card-body"> 
    <Link to={`/DSroute/pyramids`}><h3 >Pyramid</h3></Link>
      <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
    </div>
    </div>
  </div>

  <div className="col-lg-4">
    <div className="card  w-100 swe" >
    <img src="img/rbme.jpg" class="card-img-top" alt="card image cap"/>
    <div className="card-body"> 
    <Link to={`/DSroute/rome`}><h3>Colosseum Rome</h3></Link>
      <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy </p>
     
    </div>
    </div>
  </div>

  </div>
  </div>
  </div>     
       



   </div> )
}
export default DSrouting;