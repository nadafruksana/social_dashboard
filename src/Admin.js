import React from 'react'
import axios from 'axios'
//import {Link} from 'react-router-dom'


class Admin extends React.Component{
    constructor(){
        super()
        this.state={
            list:[],
            
    }
}


     


render(){
    return(
        <div>
             
            <input type="button" value="Node.js Developer"/>
            <input type="button" value="MEAN Stack Developer"/>
            <input type="button" value="FULL Stack Developer"/>
        </div>
    )
}
}
export default Admin