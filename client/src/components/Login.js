import React, { Component } from 'react'
import {loginuser} from '../actions/authActions'
import {connect} from 'react-redux'
import {
    Button,
    Form,
    Container,
    Header
} from 'semantic-ui-react'

class Login extends Component{
    
     state = {
       email:'',
       password:''
    }
      
    handleChange = (e) => {
      this.setState({[e.target.name]:e.target.value
      })
    } 
    
    handleSubmit = (event) => {
        event.preventDefault();

        const userData = {
            email:this.state.email,
            password:this.state.password
        }
        console.log(userData)
        this.props.loginuser(userData)
        
    }
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/todolist');
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/todolist')
        }
    }
    render(){
        return(
            <Container textAlign='center'>
             <Header size='huge' dividing>Login to YourLists</Header>
              <Form  onSubmit={this.handleSubmit} >
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
const mapStatetoProps = state => ({
    auth:state.auth
})

export default connect(mapStatetoProps,{loginuser})(Login);