import React,{Component} from 'react'
import {withTheme} from 'reakit'
import FlexView from 'react-flexview'
import ShortHelmet from '../helpers/ShortHelmet';
import Page from '../components/shared/Page'

import BottomBar from '../components/Home/BottomBar'
import MapLayout from '../components/shared/MapLayout'
import FloatMenu from '../components/Home/FloatMenu';
import GrayBlock from '../components/util/GrayBlock'
class Home extends Component{
    render(){
        return(
            <>    
                <ShortHelmet/>
                <Page>
                    <FlexView column grow>
                        <GrayBlock position="relative">
                            <FloatMenu/>
                            <MapLayout/>
                            <BottomBar/>
                        </GrayBlock>
                    </FlexView>
                </Page>
            </>
        )
    }
}



export default withTheme(Home)