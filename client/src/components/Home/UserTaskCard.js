import Moment from 'moment';
import React from 'react';
import FlexView from 'react-flexview';
import { MdBookmark, MdHourglassFull, MdInfo, MdLocationOn } from 'react-icons/md';
import { Card, Flex, styled,Tooltip,Block } from 'reakit';
import { ifProp, palette } from 'styled-tools';
import {connect} from 'react-redux'
import {push} from 'connected-react-router'
import { vSetActiveTask } from '../../data/actions/active_tasks';
import { CircleButton } from '../util/Buttons';



const BorderedCard = styled(Card)`
    height:100%;
    border:1px solid ${palette('border')};
    border-radius:5px;
    cursor:pointer;
    &:hover{
        background:${palette('grayscale',-2)};

    }
`
export const LightHeader = styled('h4')`
    font-weight:200;
    margin:0;
`
export const RoundImage = styled('img')`
    border-radius:50%;
    margin:0 5px;
`
export const RoundStatus = styled('div')`
    height:10px;
    width:10px;
    border-radius:50%;
    margin-right:-15px;
    z-index:1;
    background-color:${ifProp('active','#4f4',"#f44")};
`

export const UserInfo = (props)=>(
    <Flex column>
        <FlexView style={{margin:"5px 8px"}}>
            <RoundStatus active={props.task.status}/>
            <RoundImage src = {props.task.user.avatar} height = {30} width={30}/>
            <LightHeader as='h3'>{props.task.user.name}</LightHeader>
        </FlexView>
        <FlexView style={{margin:"5px"}}>
                <MdBookmark color={'purple'} fontSize={17}/>
                <div>
                    {props.task.begunFrom}  
                </div>
        </FlexView>
        <FlexView style={{margin:"5px"}}>
                <MdBookmark color={'#3c3'} fontSize={17}/>
                <div>
                    {props.task.to}
                </div>
        </FlexView>
        <FlexView style={{margin:"5px"}}>
                <MdHourglassFull color={'#333'} fontSize={17}/>
                <div>
                    {Moment(props.task.date).fromNow()}     
                </div>
        </FlexView>
    </Flex>
)

const CheckPointView = (props)=>(
    <Block use={FlexView} margin="2px" padding="6px" borderRadius='5px' background={(props.active)?palette('grayscale',-2):palette('grayscale',-1)}>
        <MdLocationOn color="#37c" fontSize={16}/>
        <div style={{flex:"1 0 auto",padding:"0px 3px"}}>
            {props.checkpoint.location}
        </div>

        <span style={{padding:"0px 3px"}}>
            {Moment(props.checkpoint.datetime).fromNow(true)} 
        </span>
    </Block>
)

export class CheckPoints extends React.Component{
    render(){

        return (
        <Card flex="1" borderLeft={(!this.props.details)?"1px dashed":"0"} overflowY = "hidden" background='transparent' borderColor={palette('border')}>
            <Flex flex={1} as='h4' style={{marginTop:"0"}}>
                <div style={{flexGrow:1,padding:"3px 0px"}}>
                    Recent Checkpoints
                </div>
                
                {
                    !this.props.details &&
                    <div>
                        <CircleButton onClick={this.props.gotoTask} palette="transparent" height="32px" width="32px" padding="3px">
                            <MdInfo fontSize={20}/>
                            <Tooltip placement="left">Show Details</Tooltip>
                        </CircleButton>
                    </div>
                }
            </Flex>
            <Flex flex={1} column>
            {
                this.props.checkpoints.length > 0 ?
                    this.props.checkpoints.map((checkpoint,index)=>(
                        <CheckPointView active={index === 0} key={index} checkpoint = {checkpoint}/>
                    ))
                :
                    <div style={{flexGrow:1}}>
                        No updates yet
                    </div>
            }
            </Flex>
        </Card>
    )
    }
}
class  UserTaskCard extends React.Component{
    onCardClick(event){
        if(this.props.activeCard !== this.props.index)
            this.props.setActiveTask(this.props.index)
    }
    render(){
        
        return(
            <BorderedCard 
                onClick={this.onCardClick.bind(this)} 
                width={this.props.active ? "600px":"300px"}  
                padding="0px" 
                margin="5px 10px 0" 
                overflowY="auto">

                <FlexView grow style={{minHeight:"80%"}} >
                    <UserInfo task ={this.props.task}/>
                    {
                        this.props.active && <CheckPoints gotoTask = {()=>this.props.gotoTask(this.props.task.id)} checkpoints = {this.props.task.checkpoints}/>
                    }
                </FlexView>
            </BorderedCard>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        activeCard:state.tasks.view.active.activeIndex
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setActiveTask: (index) => {
            dispatch(vSetActiveTask(index))
        },
        gotoTask:(taskId)=>{
            dispatch(push("/task/"+taskId))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserTaskCard)