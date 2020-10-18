import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

import Home from './Home.js'
import Hooks from './Hooks.js';
import Nav from './Nav.js'
import Restapi from './Restapi.js'
import DSrouting from './DSrouting.js';
import Userview from './Userview.js';
import Useredit from './Useredit.js'
import view from './View.js';

import Tajmahal from './Tajmahal.js';
import Pyramids from './Pyramids.js';
import Rome from './Rome.js';
import Registration from './Registration.js';



const Routings=()=>
{
    return(<>
   
        <BrowserRouter>
        <Nav/>
        
        <Switch>
        <Route exact path="/" component={Home} /> 
           <Route exact path="/home" component={Home} />
           <Route path="/home/:idno" component={Userview} />

           <Route exact path="/apidata" component={Restapi} />
           <Route path="/apidata/view/:idno" component={view} />
           <Route path="/apidata/edit/:idno" component={Useredit} />
           <Route  path="/hooks" component={Hooks} />
           <Route  path="/registration" component={Registration} />
           
           <Route exact path="/DSroute" component={DSrouting} />
           <Route path="/DSroute/tajmahal" component={Tajmahal} />
           <Route path="/DSroute/pyramids" component={Pyramids} />
           <Route path="/DSroute/rome" component={Rome} />



        </Switch>
        
        
        
        </BrowserRouter>
    


    </>

    )

}
export default Routings;