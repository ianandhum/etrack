import React from 'react'
import {Route,Switch} from 'react-router'
import {withTheme} from 'reakit';

import {GlobalStyle} from '../style/index'

//routes
import Home from './Home'
import TaskView from './TaskView'
import ClientsView from './ClientsView'
import TasksView from './TasksView'
import RouteNotFound from './RouteNotFound'


const Routes = (props)=>(
    <>
        <GlobalStyle/>
        <Switch>
            <Route exact path="/" component = {Home} />
            <Route exact path="/clients" component = {ClientsView} />
            <Route exact path="/tasks" component = {TasksView} />
            <Route exact path="/task/:task_id" component = {TaskView} />
            <Route render ={(props)=> <RouteNotFound {...props} />} />
        </Switch>
    </>
)

export default withTheme(Routes)