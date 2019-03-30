import React from 'react'
import FlexView from 'react-flexview/lib';
import {connect} from 'react-redux'

import ShortHelmet from "../helpers/ShortHelmet";
import Page from '../components/shared/Page';
import Loading from '../components/util/Loading'
import FilterBlock from '../components/TasksView/FilterBlock'

import { initTasks,fetchTasks } from '../data/actions/tasks';


class ClientView extends React.Component{
    
    componentDidMount(){
        this.props.initTasksData()
    }
    render(){
        return (
            <>
                <ShortHelmet title = {"Employee Tracker - Clients"} />
                <Page noScroll>
                    <FlexView column grow>
                        <FlexView style={{margin:"3% 3% 0"}}>
                            <h2 style={{margin:"0 0 5px"}}>All Tasks</h2>
                        </FlexView>
                        <FlexView column grow style={{margin:"10px 3%",minHeight:"350px",alignItems:"stretch"}} >
                        {this.props.waiting && 
                                
                            <FlexView grow hAlignContent="center">
                                <Loading/>
                            </FlexView>
                        }
                        {
                            this.props.loaded &&
                            (<>
                                <FilterBlock/>
                                
                            </>)
                        }
                        </FlexView>
                    </FlexView>
                </Page>
            </>
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
        waiting:state.tasks.waiting,
        loaded:state.tasks.loaded,
        tasks:state.tasks.tasks,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initTasksData: () => {
            dispatch(initTasks())
            dispatch(fetchTasks())   
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ClientView)