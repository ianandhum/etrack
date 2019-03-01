import React from 'react'
import {Route,Switch} from 'react-router'
import {withTheme} from 'reakit';

import {GlobalStyle} from '../style/index'

//routes
import Home from './Home'
import RouteNotFound from './RouteNotFound'


const Routes = (props)=>(
    <>
        <GlobalStyle/>
        <Switch>
            <Route exact path="/" component = {Home} />
            <Route render ={(props)=> <RouteNotFound {...props} />} />
        </Switch>
    </>
)

export default withTheme(Routes)