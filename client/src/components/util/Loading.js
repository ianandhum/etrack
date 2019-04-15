import React from 'react'
import FlexView from 'react-flexview'
import SyncLoader from 'react-spinners/SyncLoader'
import {withTheme} from 'reakit'
const Loading  = (props)=>(
    <FlexView grow column vAlignContent ="center" hAlignContent="center" style={props.style}>
        
        <div  style={{textAlign:"center"}}>
            <div style={{margin:"15px 0"}}>
                <SyncLoader color={props.theme.primary}/>
            </div>
            {
                props.withText &&
                
                <h4 style={{textAlign:"center",margin:"20px 0"}}>Retrieving data . . .</h4>
            }
            {props.children}
        </div>

    </FlexView>
)
export default withTheme(Loading)