import React from 'react'
import {Flex, Block} from 'reakit'

import {ButtonRounded} from '../util/Buttons'

class FilterBlock extends React.Component{
    render(){
        return (
            <Block>
                <Flex flexGrow={1} background="#f8f8f8" borderRadius="4px" padding="10px 5px">
                    <Flex flexGrow={1} column>
                        <Flex flexGrow={1} alignItems="center" fontWeight="400"  padding="0px 5px" fontSize="1.1em"> 
                        </Flex>
                    </Flex>
                    <Flex>    
                        <ButtonRounded palette="secondary"> new</ButtonRounded>
                    </Flex>
                </Flex>
            </Block>
        )
    }
}

export default FilterBlock