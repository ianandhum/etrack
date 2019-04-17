import React,{Component} from 'react'
import {withTheme} from 'reakit'
import FlexView from 'react-flexview'
import {connect} from 'react-redux'

import ShortHelmet from '../helpers/ShortHelmet';
import Page from '../components/shared/Page'
import BottomBar from '../components/Home/BottomBar'
import MapLayout from '../components/shared/MapLayout'
import FloatMenu from '../components/Home/FloatMenu';
import GrayBlock from '../components/util/GrayBlock'
import Loading from '../components/util/Loading'


import { initTasks as initActiveTasks } from '../data/actions/active_tasks';

//Home Route
class Home extends Component{
    componentDidMount(){
        if(!this.props.loaded)
            this.props.initActiveTasks()
    }
    render(){
        return(
            <>    
                <ShortHelmet/>
                <Page noScroll>
                    <FlexView column grow>
                        <GrayBlock use={FlexView} grow={1} position="relative">
                        {
                            this.props.loaded ?
                                <>
                                    <FloatMenu/>
                                    <MapLayout/>
                                    <BottomBar/>
                                </>
                            :
                                <FlexView grow={1} column basis={500} vAlignContent="center">
                                    <Loading withText/>
                                </FlexView>
                        }
                        </GrayBlock>
                    </FlexView>
                </Page>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loaded:state.tasks.activeLoaded
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initActiveTasks:() => {
            dispatch(initActiveTasks())
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(withTheme(Home))