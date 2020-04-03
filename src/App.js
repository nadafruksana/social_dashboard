import React from 'react'
import UserForm from './UserForm'
import Admin from './Admin'
import {BrowserRouter,Route,Link} from 'react-router-dom'

function App (props){
    return(
        <BrowserRouter>
        <div>
    
             <Route path="/" component={UserForm}/>
             <Route path="/admin" component={Admin}/>
        </div>
        </BrowserRouter>

    )
}
export default App


import React from 'react'
import axios from 'axios'
import Login from './Login'
import Dashboard from './Dashboard'
import {BrowserRouter, Route} from 'react-router-dom'

function App (props){
    return(
            <BrowserRouter>
                    <div>
                        <Route path="/" component={Login}/>
                        <Route path="/dashboard/:id" component={Dashboard}/>
                    </div>
            </BrowserRouter>

    )
}
export default App


