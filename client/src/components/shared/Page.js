import React from 'react'
import {Flex,Block} from 'reakit'

import TopBar from './TopBar'
import Footer from './Footer'


const Page = (props)=>(
    <Flex column minHeight="100vh" maxHeight="100vh">
        <Flex style={{height:"50px",zIndex:"1"}}>
            <TopBar/>
        </Flex>
        <Block flexGrow={1} overflow="hidden auto"  zIndex={0} use={(props.noScroll)?Flex:Block} column>
            {props.children}
        </Block>
        {
            props.showFooter &&
    
            <Footer/>
        }
    </Flex>
)

export default Page;