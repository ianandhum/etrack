import React from 'react'
import FlexView from 'react-flexview'
import Card from '../util/Card'
import LeftMenu from './LeftMenu';
import { Heading, Toolbar, withTheme,Avatar,InlineBlock, Button, Popover,Flex} from "reakit";
import {theme} from 'styled-tools'
import { MdPerson} from 'react-icons/md/index.mjs'
import { FaLock} from 'react-icons/fa/index.mjs'
import {Link} from "react-router-dom"


const TopBar = (props)=>(
    <Toolbar backgroundColor={theme('background')} gutter="8px 16px" use={Card}>
        <Toolbar.Content>
            <LeftMenu/>
        </Toolbar.Content>
        <Toolbar.Content align="center" gridAutoColumns={'max-content'}>
            <Heading fontSize={20} margin={0}>Etrack ANLON</Heading>
        </Toolbar.Content>
        {props.children}
        <Toolbar.Content align="end">
        <Popover.Container>
                {popover => (
                    <InlineBlock relative>
                        <Button use={Popover.Toggle} {...popover} background="transparent" borderRadius = "50%" padding="0px">
                            <Toolbar.Focusable
                                use={Avatar}
                                src="https://placekitten.com/150/200"
                                height={25}
                                width={25}
                                
                            />
                        </Button>
                        <Popover use={Card} borderRadius={0} fade slide expand hideOnClickOutside {...popover} minWidth={200}>
                            <FlexView column grow>
                                <Flex use={Link} to="/" textDecoration='none' padding='5px 0'>
                                    <MdPerson fontSize={22} style={{color:'#fff',backgroundColor:"#666",borderRadius:"3px",padding:'3px'}}/>
                                    <InlineBlock flex={1} paddingLeft={15}>    
                                        My Account
                                    </InlineBlock>
                                </Flex>
                                <Flex use={Link} to="/" textDecoration='none' padding='5px 0'>
                                    <FaLock fontSize={22} style={{color:'#fff',backgroundColor:"#666",borderRadius:"3px",padding:'6px'}}/>
                                    <InlineBlock flex={1} paddingLeft={15}>    
                                        Leave
                                    </InlineBlock>
                                </Flex>
                            </FlexView>
                        </Popover>
                    </InlineBlock>
                )}
                </Popover.Container>
            
        </Toolbar.Content>
    </Toolbar>
)


export default withTheme(TopBar)
