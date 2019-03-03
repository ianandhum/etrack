import React from 'react'
import FlexView from 'react-flexview'
import Card from '../util/Card'
import LeftMenu from './LeftMenu';
import { Heading, Toolbar, withTheme,Avatar,InlineBlock, Button, Popover} from "reakit";
import {theme} from 'styled-tools'
import { MdPersonOutline } from 'react-icons/md'
import {Link} from "react-router-dom"


const TopBar = (props)=>(
    <Toolbar backgroundColor={theme('background')} gutter="8px 16px" use={Card}>
        <Toolbar.Content>
            <LeftMenu/>
        </Toolbar.Content>
        <Toolbar.Content align="center" gridAutoColumns={'max-content'}>
            <Heading fontSize={24} margin={0}>Etrack ANLON</Heading>
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
                                height={30}
                                width={30}
                                
                            />
                        </Button>
                        <Popover use={Card}  fade slide expand hideOnClickOutside {...popover} width={200}>
                            <FlexView column grow>
                                <FlexView use={Link} to="/" hAlignContent={"center"}>
                                    <MdPersonOutline fontSize={18}/>
                                    <div style={{flex:"1"}}>    
                                        &nbsp;Person name
                                    </div>
                                </FlexView>
                                
                            </FlexView>
                        </Popover>
                    </InlineBlock>
                )}
                </Popover.Container>
            
        </Toolbar.Content>
    </Toolbar>
)


export default withTheme(TopBar)
