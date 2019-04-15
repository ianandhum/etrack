import React from 'react'
import {Flex, Block} from 'reakit'
import {Link} from 'react-router-dom'
import {ButtonRounded} from '../util/Buttons'

class FilterBlock extends React.Component{
    render(){
        return (
            <Block>
                <Flex flexGrow={1} background="#f8f8f8" borderRadius="4px" padding="10px 5px">
                    <Flex flexGrow={1} column>
                        <Flex flexGrow={1} alignItems="center" fontWeight="400"  padding="0px 5px" fontSize="1.1em"> 
                            lists all tasks created in the past
                        </Flex>
                    </Flex>
                    <Flex>    
                        <ButtonRounded use={Link} to="/new-task" palette="secondary"> new</ButtonRounded>
                    </Flex>
                </Flex>
            </Block>
        )
    }
}

export default FilterBlock