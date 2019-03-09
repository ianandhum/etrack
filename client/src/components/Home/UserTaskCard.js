import React from 'react'
import {styled,Card} from 'reakit'
import {palette} from 'styled-tools'

const BorderedCard = styled(Card)`
    height:100%;
    border:1px solid ${palette('border')};
    border-radius:5px;
`
const LightHeader = styled('h4')`
    font-weight:200;
`
const UserTaskCard = (props)=>(
    <BorderedCard  width={props.active ? "600px":"300px"} margin="10px 10px 0">
        <LightHeader as='h3'>Amal Josh</LightHeader>

    </BorderedCard>
)
export default UserTaskCard;