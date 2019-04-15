import React from 'react'
import { Card,Flex,styled,Block,Label} from "reakit"
import {MdLocationCity,MdLocationOn} from 'react-icons/md'
import { FaClock } from "react-icons/fa";
import {palette,ifProp,prop} from 'styled-tools'


const LightHeader = styled('h2')`

    font-weight:400;
    margin:5px 0;
    
`
const TaskCard = styled(Card)`
    box-shadow:1px 1px 6px rgba(0,0,0,0.1);
    border-radius:4px;
    color:#555;
    cursor:pointer;
    &:hover{
        background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
        color:#fff;
    }
`

const Badge = styled(Label)`
    display:inline;
    background:${palette(ifProp('palette',prop('palette'),'primary'))};
    color:#111;
    border-radius:5px;
    padding:3px 5px;
    text-transform:uppercase;
    font-size:10px;
`

const TaskListItem = (props)=>(
    <TaskCard use={Flex} flexGrow={1} flexBasis="33.333%" margin="10px 10px 0">
        <Flex justifyContent="stretch" alignItems="center">
            <MdLocationCity fontSize="3em"/>
        </Flex>
        <Flex column flexGrow={1}>
            <LightHeader>{props.task.user.name}</LightHeader>
            <Flex>
                {
                    props.task.status ?
                        <Badge palette='success' color="#fff">completed</Badge>
                    :
                        <Badge palette='alert'>pending</Badge>
                }
            </Flex>
            <Flex  margin="4px 0">
                <Flex justifyContent="center" margin="0 5px 0 0" column>
                    <MdLocationOn fontSize={16}/> 
                </Flex>
                <Block>{props.task.to}</Block>
            </Flex>
            <Flex margin="4px 0">
                <Flex justifyContent="center" margin="0 5px 0 0" column>
                    <FaClock fontSize={16}/> 
                </Flex>
                <Block>{props.task.deadLine}</Block>
            </Flex>
        </Flex>
    </TaskCard>
)

export default TaskListItem