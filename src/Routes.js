import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Login from './components/auth/Login';
import Profile from './components/auth/Profile';
import Signup from './components/auth/Signup';
import Home from './components/auth/Home';
import EndlessText from './components/users/EndlessText';
import EndlessImg from './components/users/EndlessImg';
import Logout from './components/users/Logout';
import VistaRecuerdos from './components/users/VistaRecuerdos';


const Routes =()=>{

    return(
        <Switch>
            <Route path="/Recuerdos" component={VistaRecuerdos} ></Route>
            <Route path="/logout" component={Logout}/>
            <Route path="/endlessText" component={EndlessText} />
            <Route path="/endlessImg" component={EndlessImg} />
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/" component={Home}/>
        </Switch>
    )
}

export default Routes