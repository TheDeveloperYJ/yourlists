import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {logoutuser} from '../actions/authActions'
import {connect } from 'react-redux'
import {Header} from 'semantic-ui-react'

class Home extends Component{

  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutuser()
  }
  render(){
    const  {isAuthenticated} = this.props.auth
    return(
      <div className="nav">
      
      {isAuthenticated ?
      <div className='logout'>
      <div className="home1">
      <Link to='/' ><Header size ='large' as='h2' inverted color='red'>YourLists </Header></Link>
      </div>
     <div className='authLogout'> <Link to='/' ><Header size ='large' as='h2' inverted color='grey' onClick ={this.onLogout}>Logout</Header></Link> </div>
     </div>
      : 
      <div className="auth">
      <Header size ='large' as='h2' className="home" inverted color='red'>YourLists</Header>
     <div className='login'> <Link to='/login' ><Header size ='large' as='h2' inverted color='grey'>Login</Header></Link> </div>
      <div className='register'> <Link to='/register' ><Header size ='large' as='h2' inverted color='grey'>Register</Header></Link>  </div>
     </div>
       }
     
    
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth:state.auth
})

export default connect(mapStateToProps,{logoutuser})(Home);