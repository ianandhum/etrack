import React from 'react'
import Resizable from 're-resizable'
import FlexView from 'react-flexview'
import {styled,Block,Card,Flex} from 'reakit'
import {connect} from 'react-redux'

import UserTaskCard from './UserTaskCard'


const ScrollableBlock = styled(Block)`
    flex:1;
    display: flex;
    margin:0;
    padding:10px !important;
`
const LightHeader = styled('h3')`
    font-weight:500;
    margin:1.1rem;
`
const BottomBar =(props)=>(

        <Card
            position="fixed"
            margin="0"
            bottom={0}
            padding="0px"
            defaultSize={{
                width:"100%",
                height:250,
            }}
            use={Resizable}

        >

        <Flex column height="100%" margin={0}>
            <FlexView style={{margin:"0px 7px 5px"}}>
                <FlexView grow>
                    <LightHeader>Live View - Active Tasks</LightHeader>
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
export default connect(mapStateToProps)(BottomBar)