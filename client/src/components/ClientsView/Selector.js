import React from 'react'
import {Flex,Block} from 'reakit'
import {connect} from 'react-redux'
import Select from 'react-select'

import { selectClient } from '../../data/actions/clients';

class Selector extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            clientListIndex:null
        }
    }
    
    componentWillMount(){
        this.props.selectClient(-1)
    }


    render(){
        let clientList = this.props.clients.map((item,index)=>({
            label:item.name,
            value:index
        }))
        return(
            <Block>
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
                        <Block style={{width:300}}>
                            <Select
                                value={this.state.clientListIndex}
                                options={clientList}MdInsertEmoticon
                                onChange={item => {
                                    this.setState({ clientListIndex: item })
                                    this.props.selectClient(item.value)
                                }}
                                placeholder='Select a Client'
                            />
                        </Block>
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