import React from 'react'
import FlexView from 'react-flexview'
import {SyncLoader} from 'react-spinners'
import {withTheme} from 'reakit'
const Loading  = (props)=>(
    <FlexView grow column vAlignContent ="center" hAlignContent="center" style={props.style}>
        
        <div  style={{textAlign:"center"}}>
            <div style={{padding:"10px 0"}}>
                <SyncLoader color={props.theme.primary}/>
            </div>
            {props.children}
        </div>

    </FlexView>
)
export default withTheme(Loading)