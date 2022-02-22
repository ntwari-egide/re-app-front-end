import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { DashboardLayout } from './DashboardLayout';
import { LoginSignup } from './LoginSignup';
class Routing extends Component {
    render() { 
        return (
            <Switch>
                <Route exact path='/' component={DashboardLayout}></Route>
                <Route exact path='/login' component={LoginSignup}></Route>
            </Switch>
        );
    }
}
 
export default Routing;