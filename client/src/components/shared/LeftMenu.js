import React from 'react'
import {withTheme} from 'reakit'
import {  Backdrop, Sidebar,Block } from "reakit";
import {Button} from '../util/Buttons'
const LeftMenu = (props)=>(

    <Sidebar.Container
    >
    {sidebar => (
        <Block>
            
            <Button
                use={Sidebar.Toggle} 
                {...sidebar} 
                height="48px" 
                padding="5px" 
                width="48px"
                margin="5px 10px"
                borderRadius="50%"
                palette='secondary'
                tone={1}
                fontSize = "1.2em"
                >
                {
                    (sidebar.visible)? <span>&#10006;</span> : <span>&equiv;</span>
                }
            </Button>
            <Backdrop fade use={Sidebar.Hide}  {...sidebar} zIndex={-2}/>
            <Sidebar slide align="left" {...sidebar} zIndex={-1} minWidth="200px" >
                
            </Sidebar>
        </Block>
    )}
    </Sidebar.Container>
)

export default withTheme(LeftMenu)
