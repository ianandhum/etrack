import React from 'react'
import FlexView from 'react-flexview/lib';
import {connect} from 'react-redux'

import ShortHelmet from "../helpers/ShortHelmet";
import Page from '../components/shared/Page';
import Loading from '../components/util/Loading'
import FilterBlock from '../components/TasksView/FilterBlock'
import TaskListItem from "../components/TasksView/TaskListItem";

import { initTasks,fetchTasks } from '../data/actions/tasks';


class TasksView extends React.Component{
    
    componentWillMount(){
        if(!this.props.loaded)
            this.props.initTasksData()
    }
    render(){
        return (
            <>
                <ShortHelmet title = {"Employee Tracker - Tasks"} />
                <Page noScroll showFooter>
                    <FlexView column grow>
                        <FlexView style={{margin:"1% 3% 0"}}>
                            <h2 style={{margin:"0 0 5px",minHeight:"50px"}}>All Tasks</h2>
                        </FlexView>
                        <FlexView column grow style={{margin:"10px 3%",padding:"20px 0",minHeight:"350px",alignItems:"stretch"}} >
                        {this.props.waiting && 
                                
                            <FlexView grow hAlignContent="center">
                                <Loading withText/>
                            </FlexView>
                        }
                        {
                            this.props.loaded &&
                            (<>
                                <FilterBlock/>
                                <FlexView grow wrap>
                                {
                                    
                                    this.props.tasks.map((task,index)=>(
                                        <TaskListItem task = {task} key={index}/>
                                    ))
                                }
                                </FlexView>
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
        waiting:state.tasks.view.waiting,
        loaded:state.tasks.loaded,
        tasks:state.tasks.all,
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


export default connect(mapStateToProps,mapDispatchToProps)(TasksView)