import React from 'react'
import {withTheme} from 'reakit'
import {  Backdrop, Sidebar,Block } from "reakit"
import {MdMenu,MdClose} from "react-icons/md"
import {Toolbar} from "reakit"
import {Button} from '../util/Buttons'
const LeftMenu = (props)=>(

    <Sidebar.Container
    >
    {sidebar => (
        <Block>
            
            <Button
                use={Sidebar.Toggle} 
                {...sidebar}
                borderRadius="50%"
                palette="transparent"
                >
                {
                    (sidebar.visible)?  
                        <Toolbar.Focusable use={MdClose} fontSize={18}/>
                        :
                        <Toolbar.Focusable use={MdMenu} fontSize={18}/>
                }
            </Button>
            <Backdrop fade use={Sidebar.Hide}  {...sidebar} zIndex={-2}/>
            <Sidebar slide align="left" {...sidebar} zIndex={-1} minWidth="200px" >
                <Toolbar vertical>
                    <Toolbar.Content marginTop={60} gridAutoRows={'max-content'}>
                       
                    </Toolbar.Content>
                </Toolbar>
            </Sidebar>
        </Block>
    )}
    </Sidebar.Container>
)

export default withTheme(LeftMenu)
