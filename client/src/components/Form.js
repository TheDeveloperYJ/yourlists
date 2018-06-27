import React, { Component } from 'react'

class Form extends Component{
    render(){
        return(
           <form className="form">
           <label>Login</label>
           <input id="login" type="email" required/>
           <br/>
           <br/>
           
           <label>Password</label>
           <input id="password" type="password" required />
            <br/>
            <br/>
           <button type="submit">Submit</button>
           </form>
        )
    }
}

export default Form;