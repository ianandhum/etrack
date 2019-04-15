import React from 'react'
import { Block,styled,Tooltip } from 'reakit';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import FlexView from 'react-flexview'
import { MdRefresh,MdAdd,MdList } from 'react-icons/md';

import {CircleButton} from "../util/Buttons"
import {initTasks} from '../../data/actions/active_tasks'

const BlockRight = styled(Block)`
    position:absolute;
    right:10px;
    top:20px;
    z-index:1;
`
const MenuButton = styled(CircleButton)`
    height:48px;
    width:48px;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
    margin:5px 1px;
`

class FloatMenu extends React.Component{
    gotoNewTask(){
        this.props.history.push("/new-task")
    }
    render(){
        return(
            <BlockRight>
                <FlexView column>
                    <MenuButton palette="secondary" onClick = {this.props.updateTasks}>
                        <MdRefresh fontSize = {25}/>
                        <Tooltip placement="left">Refresh</Tooltip>
                    </MenuButton>
                    <MenuButton  palette="secondary" tone={1} onClick = {this.gotoNewTask.bind(this)}>
                        <MdAdd fontSize = {25}/>
                        <Tooltip placement="left">Assign New Task</Tooltip>
                    </MenuButton>
                    <MenuButton  palette="secondary" tone={1} onClick = {this.props.updateTasks}>
                        <MdList fontSize = {25}/>
                        <Tooltip placement="left">Show history</Tooltip>
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

