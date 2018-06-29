import React, { Component } from 'react'
// import axios from 'axios'

class Form extends Component{
    state = {
       name:'',
       email:'',
       password:''
    }
      
    handleChange = (e) => {
      this.setState({
          name:e.target.value,
          email:e.target.value,
          password:e.target.value
      })
    } 
    
    handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }

        //  axios.post('/api/users/register',{user})
        //  .then(res => console.log(res))
         
    }
    

    render(){
        return(
           <form className="form" onSubmit={this.handleSubmit}>
            <label>Name</label>
           <input id="name" type="text" required name="name" onChange={this.handleChange}/>
           <br/>
           <br/>

           <label>Login</label>
           <input id="login" type="email" required name="email"  onChange={this.handleChange}/>
           <br/>
           <br/>
           
           <label>Password</label>
           <input id="password" type="password" required name="password"  onChange={this.handleChange}/>
            <br/>
            <br/>
           <button type="submit">Submit</button>
           </form>
        )
    }
}

export default Form;