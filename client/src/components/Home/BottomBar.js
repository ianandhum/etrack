import React from 'react'
import Resizable from 're-resizable'
import FlexView from 'react-flexview'
import {styled,Group,Button,Block,Card,Flex} from 'reakit'
import {connect} from 'react-redux'

import {initTasks} from '../../data/actions/active_tasks'
import UserTaskCard from './UserTaskCard'


const ScrollableBlock = styled(Block)`
    flex:1;
    display: flex;
    margin:0;
    padding:10px !important;
`
const LightHeader = styled('h4')`
    font-weight:500;
    margin:1.1rem;
`
const BottomBar =(props)=>(

        <Card
            position="fixed"
            margin="0px 2%"
            bottom={0}
            borderTopLeftRadius="5px"
            borderTopRightRadius="5px"
            padding="0px"
            defaultSize={{
                width:"96%",
                height:250,
            }}
            maxWidth="96%"
            minWidth="96%"
            use={Resizable}

        >

        <Flex column height="100%" margin={0}>
            {/*
            <FlexView>
                <FlexView grow>
                    <Group style={{padding:"0 5px",margin:"5px"}}>
                        <Button>All</Button> 
                        <Button tone={-1}>Delayed</Button>
                        <Button tone={-1}>On Time</Button>
                    </Group>
                    <Group style={{padding:"0 5px",margin:"5px"}}>
                    </Group>
                </FlexView>
                <FlexView hAlignContent="end">
                    <Group style={{padding:"0 5px",margin:"5px"}}>
                        <Button tone={-2} onClick = {props.updateTasks}>Update</Button>
                        <Button tone={1}>New Task</Button>
                    </Group>
                </FlexView>
            </FlexView>
            */}
            <FlexView style={{margin:"0px 7px 5px"}}>
                <FlexView grow>
                    <LightHeader>Live View</LightHeader>
                </FlexView>
                <FlexView hAlignContent="end">
                    <Group style={{padding:"0 5px",margin:"5px"}}>
                        <Button tone={-2} onClick = {props.updateTasks}>Update</Button>
                        <Button tone={1}>New Task</Button>
                    </Group>
                </FlexView>
            </FlexView>
            <FlexView grow style={{overflow:"auto hidden"}}>
                <ScrollableBlock>
                    {
                        props.tasks && props.tasks.map((task,index)=>(
                            <UserTaskCard 
                                key={index} 
                                active={props.activeIndex===index} 
                                index={index}  
                                task = {task}
                            />
                        ))
                    }
                </ScrollableBlock>
            </FlexView>
        </Flex>
    </Card>
)

const mapStateToProps = (state, ownProps) => {
    return {
        tasks:state.tasks.active,
        activeIndex:state.tasks.view.active.activeIndex
    }
  }
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      updateTasks: () => {
        dispatch(initTasks())
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(BottomBar)