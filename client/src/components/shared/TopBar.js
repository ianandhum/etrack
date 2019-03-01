import React from 'react'
import FlexView from 'react-flexview'
import Card from '../util/Card'
import Logo from '../util/Logo'
import {Link} from 'react-router-dom'
import LeftMenu from './LeftMenu';
import { withTheme,Avatar,InlineBlock, Button, Popover} from "reakit";
import BorderedBox from '../util/BorderedBox'

const TopBar = (props) =>(
        <Card 
            as={FlexView}
            grow
            style={{
                borderBottom:"1px solid "+props.theme.border
            }}
        >
        
            <FlexView>
                <LeftMenu/>
                <Logo as={Link} to="/">ETrack &nbsp;ANLON</Logo>
            </FlexView>
            
            <FlexView grow>
                {props.children}
            </FlexView>
            <FlexView hAlignContent="right">

                <Popover.Container>
                {popover => (
                    <InlineBlock relative>
                    <Button use={Popover.Toggle} {...popover} margin="10px" background="transparent" borderRadius = "50%" padding="0px">
                        <Avatar src="https://placekitten.com/100/100" alt="Kitten" fontSize={30} />
                    </Button>
                    <Popover fade slide expand hideOnClickOutside {...popover}>
                        <Popover.Arrow/>
                        <FlexView column hAlignContent="center" style={{width:"200px"}}>
                            Add List here
                        </FlexView>
                        
                    </Popover>
                    </InlineBlock>
                )}
                </Popover.Container>
            </FlexView>
        </Card>
)

export default withTheme(TopBar)
