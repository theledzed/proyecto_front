import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';



class Logout extends Component{
 


  render(){

    localStorage.removeItem('token')
    localStorage.removeItem('user')

    return(

      <Redirect to="/login"/>

    )
  }

}


export default Logout