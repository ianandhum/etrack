import React from 'react'
import {Flex,Divider,Block,Input,Label} from 'reakit'
import FlexView from 'react-flexview'
import Select from "react-select";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Loading from "../util/Loading";

import { initClients,fetchClients } from '../../data/actions/clients';
import { initEmployees,fetchEmployees } from '../../data/actions/employees';
import { saveTask } from "../../data/actions/tasks";

export const TaskHeader = (props)=>(
    <Flex column margin="0">
        <FlexView column>
            <h2 style={{margin:"0px"}}>Create New Task</h2>
        </FlexView>
    </Flex>
)

class TaskForm extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            client:null,
            employee:null,
            due_date:"",
            saved:false
        }
        this.sendRequestForm = this.sendRequestForm.bind(this)
    }

    componentDidMount(){
        if(!this.props.clientLoaded || !this.props.employeeLoaded){
            this.props.loadContents()
        }
    }
    sendRequestForm(event){
        event.preventDefault()
        this.props.saveTask({
            client: this.props.clients[this.state.client.value],
            employee: this.props.employees[this.state.employee.value],
            due_date:this.state.due_date  
        })
        this.setState({saved:true})
        setTimeout(()=>{
            this.props.history.push("/")
        },500)
    }
    
    render(){
        let clientList = this.props.clients.map((item,index)=>({
            label:item.name,
            value:index
        }))
        let employeeList = this.props.employees.map((item,index)=>({
            label:item.name,
            value:index
        }))
        return(
            <Flex boxShadow="1px 1px 6px rgba(0,0,0,0.1)" borderRadius="5px" padding="6px" width="500px" column >
                {
                    (this.props.clientLoaded && this.props.employeeLoaded) ?
                    <>
                        <Flex flexGrow={1} margin="15px 0">
                            <TaskHeader/>
                        </Flex>
                        <Divider margin="0" />
                        <Flex use="form" method="post" column flexGrow={1} margin="5px 2px">
                                <Block justifyContent="stretch"  margin="10px 0"   flexGrow={1}>
                                    <Label color="#555" fleGrow={1} width="100%"> 
                                        Client
                                        <Select
                                            options={clientList}
                                            placeholder='Select a Client'
                                            value={this.state.client}
                                            onChange={item => {
                                                this.setState({ client: item })
                                            }}
                                        />
                                    </Label>
                                </Block>
                                <Block justifyContent="stretch" margin="10px 0" flexGrow={1} >
                                    <Label color="#555" fleGrow={1} width="100%"> 
                                        Assigned to
                                        <Select
                                            options={employeeList}
                                            placeholder='Assign an Employee'
                                            value={this.state.employee}
                                            onChange={item => {
                                                this.setState({ employee: item })
                                            }}
                                        />
                                    </Label>
                                </Block>
                                <Block justifyContent="stretch" margin="10px 0" flexGrow={1} >
                                    <Label color="#555" fleGrow={1} width="100%"> 
                                        Due Date
                                        <Input type="date"
                                            border="1px solid #ddd"
                                            padding="10px"
                                            height="40px"
                                            color="#888"
                                            onChange={event => {
                                                this.setState({ due_date: event.target.value })
                                            }}
                                            placeholder='Due Date'
                                        />
                                    </Label>
                                </Block>
                                <Flex justifyContent="stretch"  margin="10px 0"  flexGrow={1} >
                                    <Input 
                                        palette={this.state.saved?"success":"primary"} 
                                        disabled={this.state.saved} 
                                        type="submit" 
                                        onClick={this.sendRequestForm} 
                                        flexGrow={1} 
                                        padding="8px 0" 
                                        value={this.state.saved?"Done":"Create"}/>
                                </Flex>
                        </Flex>
                    </>
                    :

                    <Loading withText/>
                }
            </Flex>
              
        )
    }
}

const mapStateToProps=(state,ownProps)=>{
    return {
        clientLoaded:state.client.loaded,
        clients:state.client.clients,        
        employeeLoaded:state.employee.loaded,
        employees:state.employee.employees,
        waiting:state.tasks.waiting
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        //load client,employee info if not loaded
        loadContents:()=>{
            dispatch(initClients())
            dispatch(fetchClients())
            dispatch(initEmployees())
            dispatch(fetchEmployees())  
        },
        saveTask: (taskInfo) => {
            dispatch(saveTask(taskInfo))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(TaskForm))