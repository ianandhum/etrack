import React from 'react'
import FlexView from 'react-flexview'
import TopBar from './TopBar'
import Card from '../util/Card';



const Page = (props)=>(
    <FlexView column>
        <FlexView style={{height:"60px",zIndex:"1"}}>
            <TopBar>
            </TopBar>
        </FlexView>
        <FlexView grow>
            <Card noShadow style={{flex:1}}>
                {props.children}
            </Card>
        </FlexView>
    </FlexView>
)

export default Page;