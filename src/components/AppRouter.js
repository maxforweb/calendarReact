import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Event, Login } from '../pages';


const AppRouter = () => {
    const auth = false;
    return (
        auth ?
        <Switch>
            <Route exact path="/" component={Event} />
        </Switch>
        :
        <Switch>
            <Route exact path="/login" component={Login} />
        </Switch>
    )
}

export default AppRouter
