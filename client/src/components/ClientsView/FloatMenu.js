import React from 'react'
import { Block,styled,Tooltip } from 'reakit';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import FlexView from 'react-flexview'
import { MdUndo, MdSave } from 'react-icons/md';

import {CircleButton} from "../util/Buttons"
import {initTasks} from '../../data/actions/active_tasks'

const BlockRight = styled(Block)`
    position:absolute;
    right:10px;
    top:15px;
    z-index:1;
`
const MenuButton = styled(CircleButton)`
    height:48px;
    width:48px;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
    margin:5px 1px;
`

class FloatMenu extends React.Component{
    render(){
        return(
            <BlockRight>
                <FlexView column>
                    <MenuButton palette="primary" disabled={!this.props.showSave} onClick = {this.props.save}>
                        <MdSave fontSize = {25}/>
                        <Tooltip placement="left">Save</Tooltip>
                    </MenuButton>
                    <MenuButton palette="secondary" onClick = {this.props.clearAll}>
                        <MdUndo fontSize = {25}/>
                        <Tooltip placement="left">Clear All Markers</Tooltip>
                    </MenuButton>
                </FlexView>
            </BlockRight>

        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      updateTasks: () => {
        dispatch(initTasks())
      }
    }
  }




export default withRouter(
                connect(null , mapDispatchToProps)(FloatMenu)
            )

