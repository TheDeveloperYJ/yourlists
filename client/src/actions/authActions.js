
import  axios  from 'axios';
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import {SET_CURRENT_USER} from './types'

export const registerUser =(userData,history)=>dispatch => {
axios.post('/api/users/register',userData)
.then(res=>history.push('login'))
.catch(err => console.log(err))
}

export const loginuser = (userData) =>dispatch =>{
    axios.post('/api/users/login',userData)
    .then(res=>{
        const {token} = res.data
        localStorage.setItem('jwt-token',token)
        //taking this token into header for authorization

        setAuthToken(token)

        const decoded = jwt_decode(token)
        dispatch(setCurrentUser(decoded))
    })
}


export const setCurrentUser = (decoded) =>{
    return {
        type:SET_CURRENT_USER,
        payload:decoded
    }
}

export const logoutuser = () =>dispatch => {

    localStorage.removeItem('jwt-token')
    setAuthToken(false);
    dispatch(setCurrentUser({}))
}