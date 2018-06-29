import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/Home.js'
import {Provider} from 'react-redux'
import Login from './components/Login';
import Register from './components/Register';
import store from './store'
import {logoutuser} from './actions/authActions'
import Todolist from './components/TodoList.js'
import  jwt_decode  from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import PrivateRoute from './components/PrivateRoute';

if(localStorage['jwt-token']){
  setAuthToken(localStorage['jwt-token'])
  const decoded = jwt_decode(localStorage['jwt-token'])
  store.dispatch(setCurrentUser(decoded))

  const currentTime = Date.now()/1000;
  if(decoded.exp < currentTime){
    store.dispatch(logoutuser())
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div>
      <div className="App">
       <Route exact path='/login' component={Login}/>
       <Route exact path='/register' component={Register}/>
       <Route exact path='/' component={Home}/>
      <Switch>
       <PrivateRoute exact path='/todolist' component={Todolist}/>
       </Switch>
      </div>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
