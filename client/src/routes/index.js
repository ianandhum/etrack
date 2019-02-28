import React from 'react'
import {Route,Switch} from 'react-router'

//routes
import Home from './Home'
import RouteNotFound from './RouteNotFound'


const Routes = (props)=>(
    <Switch>
        <Route exact path="/" component = {Home} />
        <Route render ={(props)=> <RouteNotFound {...props} />} />
    </Switch>
)

export default Routes