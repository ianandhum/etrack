import React from 'react'
import {Flex,Block} from 'reakit'
import {connect} from 'react-redux'
import { Dropdown } from "@bit/primefaces.primereact.dropdown";

import { selectClient } from '../../data/actions/clients';

import 'react-table/react-table.css'

class Selector extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            clientListIndex:null
        }
    }
    
    render(){
        let clientList = this.props.clients.map((item,index)=>({
            label:item.name,
            value:index
        }))
        return(
            <Block flexGrow={1}>
                <Flex flexGrow={1} background="#f8f8f8" borderRadius="4px" padding="10px 5px">
                    <Flex flexGrow={1} column>
                        <Flex flexGrow={1} alignItems="center" fontWeight="400"  padding="0px 5px" fontSize="1.1em"> 
                            Select one client to view or modify client information
                        </Flex>
                    </Flex>
                    <Flex>
                        <Flex flexGrow={1} fontWeight="500" alignItems="center" padding="0px 8px"> 
                            Client Name:
                        </Flex>
                        <Dropdown
                            style={{ width: 300 }}
                            value={this.state.clientListIndex}
                            options={clientList}
                            onChange={e => {
                                this.setState({ clientListIndex: e.value })
                                this.props.selectClient(e.value)
                            }}
                            placeholder='Select a Client'
                        />
                    </Flex>
                </Flex>
            </Block>
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
        clients:state.client.clients,
        loaded:state.client.loaded
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        selectClient:(index)=>{
            dispatch(selectClient(index))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Selector)