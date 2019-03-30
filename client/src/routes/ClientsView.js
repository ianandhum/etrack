import React from 'react'
import FlexView from 'react-flexview/lib';
import {connect} from 'react-redux'
import {MdNotInterested} from 'react-icons/md'

import ShortHelmet from "../helpers/ShortHelmet";
import Page from '../components/shared/Page';
import Loading from '../components/util/Loading'
import ClientSelector from '../components/ClientsView/Selector'
import GeoFenceMap from '../components/ClientsView/GeoFenceMap'
import ClientCard from '../components/ClientsView/ClientCard'

import { initClients,fetchClients } from '../data/actions/clients';


class ClientView extends React.Component{
    
    componentDidMount(){
        this.props.initClientData()
    }
    render(){
        return (
            <>
                <ShortHelmet title = {"Employee Tracker - Clients"} />
                <Page noScroll>
                    <FlexView column grow>
                        <FlexView style={{margin:"3% 3% 0"}}>
                            <h2 style={{margin:"0 0 5px"}}>Clients</h2>
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
                                <ClientSelector/>
                                {this.props.activeClientIndex >= 0 ?

                                    <FlexView grow style={{margin:"10px 0 0"}}>
                                        <FlexView grow={0} shrink={1} basis="70%" style={{position:'relative'}}>
                                            <GeoFenceMap/>
                                        </FlexView>
                                        <FlexView grow>
                                            <ClientCard client={this.props.activeClient}/>
                                        </FlexView>
                                    </FlexView>

                                    :

                                    <FlexView column grow vAlignContent="center" hAlignContent="center">
                                        <MdNotInterested fontSize="6em"/>
                                        <h3>No Client Selected</h3>
                                    </FlexView>
                                }
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
        clients:state.client.clients,
        activeClientIndex:state.client.view.selectedIndex,
        activeClient:(state.client.view.selectedIndex>=0)?
                        state.client.clients[state.client.view.selectedIndex]:null
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