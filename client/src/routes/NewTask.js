import React from 'react'
import ShortHelmet from "../helpers/ShortHelmet";
import FlexView from 'react-flexview/lib';
import Page from '../components/shared/Page';
import TaskForm from '../components/NewTask/TaskForm';

class NewTask extends React.Component{
    

    render(){
        return (
            <>
                <ShortHelmet title = {"Employee Tracker - New Task " } />
                <Page noScroll>
                    <FlexView column grow>
                        <FlexView grow style={{minHeight:"50vh",alignItems:"center"}}>
                        {
                           <>             
                                <FlexView style={{justifyContent:"center"}}  grow>
                                    <TaskForm saveTask = {this.props.saveTask}/>
                                </FlexView>
                            </>
                        }
                        </FlexView>
                    </FlexView>
                </Page>
            </>
        )
    }
}



export default NewTask