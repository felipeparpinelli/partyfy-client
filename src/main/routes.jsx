import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './app'
import Login from '../login/loginContent';
import UserContent from '../user/userContent';


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <Route path="/logged/:userID" component={UserContent} />
            <Route path="/callback/felipeparpinelli" component={UserContent} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)
