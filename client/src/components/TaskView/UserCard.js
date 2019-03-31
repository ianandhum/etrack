import React from 'react'
import {Flex,Divider} from 'reakit'
import FlexView from 'react-flexview'
import { RoundImage,LightHeader,CheckPoints } from "../Home/UserTaskCard";
export const UserInfo = (props)=>(
    <Flex column margin="10px 0">
        <FlexView column style={{alignItems:"center",margin:"5px 8px"}}>
            <RoundImage src = {props.task.user.avatar} height = {50} width={50}/>
            <LightHeader as='h3'>{props.task.user.name}</LightHeader>
            
        </FlexView>
        <FlexView style={{margin:"5px"}}>
                <b>TO: &nbsp;&nbsp;</b>
                <div style={{flexShrink:1}}> 
                    {props.task.to}
                </div>
        </FlexView>
    </Flex>
)

class UserCard extends React.Component{
    render(){
        return(
            <Flex flexGrow={1} column >
                <Flex flexGrow={1} alignItems="center">
                    <UserInfo details={true} task = {this.props.task} />
                </Flex>
                <Divider  />
                <Flex flexGrow={1}>
                    <CheckPoints details={true} checkpoints = {this.props.task.checkpoints}/>
                </Flex>
            </Flex>
              
        )
    }
}

export default UserCard 