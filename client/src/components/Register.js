import React, { Component } from 'react'
import {Button,Form,Container,Header} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
 import { registerUser } from './../actions/authActions';


class Register extends Component{
    
   

     state = {
       name:'',
       email:'',
       password:''
    }
      
    handleChange = (e) => {
      this.setState({[e.target.name]:e.target.value
      })
    } 
    
    handleSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }
        console.log(newUser)
        this.props.registerUser(newUser,this.props.history)
        
    }
    render(){
         
        return(
            <Container textAlign='center'>
             <Header size='huge' dividing>Register for YourLists</Header>
          
            <Form  onSubmit={this.handleSubmit} >
            <Form.Field inline>
            <label>Name</label>
           <input id="name" type="text" required name="name" onChange={this.handleChange}
           value={this.state.name}
           placeholder='Enter your name'/>
          </Form.Field>
          
          <Form.Field  inline>
           <label>Login</label>
           <input id="login" type="email" required name="email"  onChange={this.handleChange}
           value={this.state.email}
           placeholder='Enter your email'
           />
          </Form.Field>
           
           <Form.Field  inline>
           <label>Password</label>
           <input id="password" type="password" required name="password"  onChange={this.handleChange}
           value={this.state.password}
           placeholder='Enter your password'
           />
            </Form.Field>
           <Button type="submit" primary>Submit</Button>
           </Form>
      
            </Container>
        )
    }


}

const mapStateToProps = (state) =>({
    auth:state.auth
})

export default connect(mapStateToProps,{registerUser})(withRouter(Register));
