import Moment from 'moment';
import React from 'react';
import FlexView from 'react-flexview';
import { FaTruck } from 'react-icons/fa/index.mjs';
import { MdBookmark, MdHourglassFull, MdMore } from 'react-icons/md/index.mjs';
import { Card, Flex, styled } from 'reakit';
import { ifProp, palette } from 'styled-tools';
import {connect} from 'react-redux'

import { vSetActiveTask } from '../../data/actions/active_tasks';
import { ButtonLink } from '../util/Buttons';



const BorderedCard = styled(Card)`
    height:100%;
    border:1px solid ${palette('border')};
    border-radius:5px;
    cursor:pointer;
    &:hover{
        background:${palette('grayscale',-2)};

    }
`
const LightHeader = styled('h4')`
    font-weight:200;
    margin:0;
`
const RoundImage = styled('img')`
    border-radius:50%;
    margin:0 5px;
`
const RoundStatus = styled('div')`
    height:10px;
    width:10px;
    border-radius:50%;
    margin-right:-15px;
    z-index:1;
    background-color:${ifProp('active','#4f4',"#f44")};
`

const LeftCard = (props)=>(
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
    <FlexView>
        <FaTruck fontSize={16}/>
        <div style={{flex:"1 0 auto",padding:"0px 3px"}}>
            {props.checkpoint.location}
        </div>

        <span style={{padding:"0px 3px"}}>
            {Moment(props.checkpoint.datetime).fromNow(true)} 
        </span>
    </FlexView>
)

const RightCard = (props)=>(
    <Card flex="1" borderLeft="1px dashed" overflowY = "hidden" background='transparent' borderColor={palette('border')}>
        <Flex as='h4' style={{marginTop:"0"}}>
            <div style={{flexGrow:1}}>
                Recent Checkpoints
            </div>
            <div>
                <ButtonLink title="Show Details">
                    <MdMore fontSize={16}/>
                </ButtonLink>
            </div>
        </Flex>
        {
            props.checkpoints.length > 0 ?
                props.checkpoints.map((checkpoint,index)=>(
                    <CheckPointView key={index} checkpoint = {checkpoint}/>
                ))
            :
                <div style={{flexGrow:1}}>
                    No updates yet
                </div>
        }
    </Card>
)

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
                    <LeftCard task ={this.props.task}/>
                    {
                        this.props.active && <RightCard checkpoints = {this.props.task.checkpoints}/>
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
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserTaskCard)