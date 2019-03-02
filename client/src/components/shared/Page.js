import React from 'react'
import {Flex} from 'reakit'

import TopBar from './TopBar'



const Page = (props)=>(
    <Flex column>
        <Flex style={{height:"60px",zIndex:"1"}}>
            <TopBar/>
        </Flex>
        <Flex flex={1}>
            {props.children}
        </Flex>
    </Flex>
)

export default Page;