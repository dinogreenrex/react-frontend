import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom'

const AuthRoute =  ({path,exact, component: Component, isAuth, ...rest}) => (
    <Route
        path={path}
        exact={exact}
        isAuth={isAuth}
        render={(props) => (
            isAuth ? <Component {...props} {...rest} /> : <Redirect to="/" /> ) }
        />
)
export default AuthRoute