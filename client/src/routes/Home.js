import React,{Component} from 'react'
import {withTheme} from 'reakit'
import FlexView from 'react-flexview'
import {Block,styled} from 'reakit';
import {palette} from 'styled-tools'
import ShortHelmet from '../helpers/ShortHelmet';
import Page from '../components/shared/Page'

import BottomBar from '../components/Home/BottomBar'
import MapLayout from '../components/Home/MapLayout'
import FloatMenu from '../components/Home/FloatMenu';

const GrayBlock = styled(Block)`
    min-height:calc( 100vh - 60px );
    width:calc( 100vw);
    position:relative;
    background-color:${palette('grayscale',-2)};
`

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