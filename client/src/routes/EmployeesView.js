import React from 'react'
import FlexView from 'react-flexview/lib';
import {connect} from 'react-redux'

import ShortHelmet from "../helpers/ShortHelmet";
import Page from '../components/shared/Page';
import Loading from '../components/util/Loading'
import TabularView from "../components/ClientsView/TabularView";

import { initEmployees,fetchEmployees } from '../data/actions/employees';


class EmployeesView extends React.Component{
    
    componentDidMount(){
        if(!this.props.loaded){
            this.props.initEmployeeData()
        }
    }
    render(){
        return (
            <>
                <ShortHelmet title = {"Employee Tracker - Employees"} />
                <Page noScroll showFooter>
                    <FlexView column grow>
                        <FlexView style={{margin:"1% 3% 0"}}>
                            <h2 style={{margin:"0 0 5px"}}>Employees</h2>
                        </FlexView>
                        <FlexView column grow style={{margin:"10px 3%",minHeight:"350px",alignItems:"stretch"}} >
                        {this.props.waiting && 
                             
                            <FlexView grow hAlignContent="center">
                                <Loading withText/>
                            </FlexView>
                        }
                        {
                            this.props.loaded &&
                            (<>
                               <TabularView data={this.props.employees} columnLayout={[
                                    {
                                        Header: "Employee Name",
                                        accessor:"name"
                                    },
                                    {
                                        Header: "Designation",
                                        accessor:"designation"
                                    },
                                    {
                                        Header: "Phone",
                                        accessor:"phone"
                                    }
                                    ]}
                                    />
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
        waiting:state.employee.waiting,
        loaded:state.employee.loaded,
        employees:state.employee.employees,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initEmployeeData: (taskId) => {
            dispatch(initEmployees())
            dispatch(fetchEmployees())   
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(EmployeesView)