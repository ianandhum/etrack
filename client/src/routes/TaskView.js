import React from 'react'
import ShortHelmet from "../helpers/ShortHelmet";
import FlexView from 'react-flexview/lib';
import Resizable from 're-resizable'
import {connect} from 'react-redux'

import MapLayout from '../components/shared/MapLayout';
import Page from '../components/shared/Page';
import GrayBlock from '../components/util/GrayBlock';

import FloatMenu from '../components/TaskView/FloatMenu';

import { fetchTask } from "../data/actions/active_tasks";

import Loading from '../components/util/Loading'
import UserCard from '../components/TaskView/UserCard';

class TaskView extends React.Component{
    
    componentDidMount(){
        // Get the task at id from API and save it to redux store
        this.props.fetchTask(this.props.match.params.task_id)
    }

    render(){
        return (
            <>
                <ShortHelmet title = {"Employee Tracker - Task " + this.props.match.params.task_id } />
                <Page noScroll>
                    <FlexView column grow>
                        <FlexView grow style={{minHeight:"50vh"}}>
                        {
                            !this.props.waiting ?
                           <>             
                                <GrayBlock 
                                        defaultSize={{
                                            width:"80vw",
                                            height:"100%"
                                        }} 
                                        use={Resizable} 
                                        position="relative"
                                        maxHeight="100%"
                                        overflow="hidden"
                                        >
                                    <FloatMenu/>
                                    <MapLayout taskId ={this.props.match.params.task_id} />
                                </GrayBlock>
                                <FlexView height="100%" grow style={{overflowY:"auto"}}>
                                    <UserCard task = {this.props.task}/>
                                </FlexView>
                            </>
                            :
                            
                            <Loading withText/>
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
        task:(!state.tasks.view.waiting)?state.tasks.view.selected:{}
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchTask: (taskId) => {
            dispatch(fetchTask(taskId))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TaskView)