import React from 'react'
import { Block,styled } from 'reakit';
import {connect} from 'react-redux'
import FlexView from 'react-flexview'
import { MdRefresh } from 'react-icons/md';

import {CircleButton} from "../util/Buttons"
import {initTasks} from '../../data/actions/active_tasks'

const BlockRight = styled(Block)`
    position:absolute;
    right:10px;
    top:20px;
    z-index:3;
`
const MenuButton = styled(CircleButton)`
    height:48px;
    width:48px;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
    margin:5px 1px;
`

const FloatMenu=(props)=>(
    <BlockRight>
        <FlexView column>
            <MenuButton title="Refresh" palette="secondary" onClick = {props.updateTasks}>
                <MdRefresh fontSize = {25}/>
            </MenuButton>
            <MenuButton title="Refresh"  tone={-2} onClick = {props.updateTasks}>
                <MdRefresh fontSize = {25}/>
            </MenuButton>
        </FlexView>
    </BlockRight>
)

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      updateTasks: () => {
        dispatch(initTasks())
      }
    }
  }




export default connect(null , mapDispatchToProps)(FloatMenu)

