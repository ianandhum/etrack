import React from 'react'
import Resizable from 're-resizable'
import FlexView from 'react-flexview'
import {styled,Group,Button,Block,Card,Flex} from 'reakit'
import UserTaskCard from './UserTaskCard'

const ScrollableBlock = styled(Block)`
    flex:1;
    display: flex;
    margin:0;
    padding:20px !important;
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
                height:200,
            }}
            maxWidth="96%"
            minWidth="96%"
            use={Resizable}

        >

        <Flex column height="100%" margin={0}>
            <FlexView>
                <FlexView grow>
                    <Group style={{padding:"0 10px",margin:"10px"}}>
                        <Button>All</Button> 
                        <Button tone={-1}>Delayed</Button>
                        <Button tone={-1}>On Time</Button>
                    </Group>
                </FlexView>
                <FlexView hAlignContent="end">
                    <Group style={{padding:"0 10px",margin:"10px"}}>
                        <Button>New Task</Button>
                    </Group>
                </FlexView>
            </FlexView>
            <FlexView grow style={{overflow:"auto hidden"}}>

                <ScrollableBlock>
                    <UserTaskCard/>
                    <UserTaskCard/>
                    <UserTaskCard active/>
                    <UserTaskCard/>
                </ScrollableBlock>
            </FlexView>
        </Flex>
    </Card>
)

export default BottomBar