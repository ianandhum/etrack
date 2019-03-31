import React from 'react'
import {Flex,Card,Block} from 'reakit'
import {MdBusinessCenter} from 'react-icons/md'

import {Button} from '../util/Buttons'

class ClientCard extends React.Component{
    render(){
        return (
            <Flex column flexGrow={1}>
                <Card use={Flex}  margin="0 8px 12px">
                    <Flex column flexBasis={50} alignItems='center'>
                        <MdBusinessCenter fontSize={40}/>
                    </Flex>
                    <Flex column>
                        <h2 style={{margin:0,flexGrow:1,fontWeight:300}}>{this.props.client.name}</h2>
                        <h5 style={{margin:0,flexGrow:1,fontWeight:300}}>{this.props.client.city} {this.props.client.state} {this.props.client.country}</h5>
                        <h5 style={{margin:0,flexGrow:1,fontWeight:300}}>{this.props.client.pincode}</h5>
                    </Flex>
                </Card>
                <Card use={Flex}  margin="0 6px 8px">
                    <Block flexBasis={50} fontWeight='bold' >Phone</Block>
                    <Block flexGrow={1}> {this.props.client.phone} </Block>
                </Card>
                <Card use={Flex}  margin="0 6px 8px">
                    <Block flexBasis={50} fontWeight='bold'>Area</Block>
                    <Block flexGrow={1}> {this.props.client.area} </Block>
                </Card>
                <Card use={Flex}  margin="0 6px 8px">
                    <Block flexBasis={50} fontWeight='bold'>Territory</Block>
                    <Block flexGrow={1}> {this.props.client.territory} </Block>
                </Card>
                <Card use={Flex}  margin="0 6px 8px">
                    <Block flexBasis={50} fontWeight='bold'>Code</Block>
                    <Block flexGrow={1}> {this.props.client.code} </Block>
                </Card>
                <Card use={Flex}  margin="0 6px 8px">
                    <Block flexBasis={50} fontWeight='bold'>Sector</Block>
                    <Block flexGrow={1}> {this.props.client.sector} </Block>
                </Card>
                <Flex use={Flex} flexGrow={1} alignItems="end" margin="0 6px">
                    <Button palette="success" padding="20px 0px" flexGrow={1}>Schedule A Task</Button>
                </Flex>
                
            </Flex>
        )
    }
}


export default ClientCard
