import React from 'react'
import FlexView from 'react-flexview/lib';
import {connect} from 'react-redux'
import PrimereactStyle from '@bit/primefaces.primereact.internal.stylelinks';

import ShortHelmet from "../helpers/ShortHelmet";
import Page from '../components/shared/Page';
import Loading from '../components/util/Loading'
import ClientSelector from '../components/ClientsView/Selector'

import { initClients,fetchClients } from '../data/actions/clients';


class ClientView extends React.Component{
    
    componentDidMount(){
        this.props.initClientData()
    }
    render(){
        return (
            <>
                <ShortHelmet title = {"Employee Tracker - Clients"} />
                <PrimereactStyle/>
                <Page>
                    <FlexView column grow>
                        <FlexView style={{margin:"3% 3% 0"}}>
                            <h2 style={{margin:"0 0 5px"}}>Clients</h2>
                        </FlexView>
                        <FlexView column grow style={{margin:"10px 3%",minHeight:"250px"}} >
                        {this.props.waiting && 
                                
                            <FlexView grow hAlignContent="center" marginTop="20vh">
                                <Loading/>
                            </FlexView>
                        }
                        {
                            this.props.loaded &&
                            (<>
                                <ClientSelector/>

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
        waiting:state.client.waiting,
        loaded:state.client.loaded,
        clients:state.client.clients
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initClientData: (taskId) => {
            dispatch(initClients())
            dispatch(fetchClients(taskId))   
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ClientView)