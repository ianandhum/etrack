import React from 'react'
import {styled,Card,Flex} from 'reakit'
import {palette,ifProp} from 'styled-tools'
import FlexView from 'react-flexview'
import { MdBookmark, MdHourglassFull,MdMore } from 'react-icons/md/index.mjs';
import { FaTruck } from 'react-icons/fa/index.mjs';
import Moment from 'moment'

//debugging
import Faker from 'faker'

import {ButtonLink} from '../util/Buttons'


const BorderedCard = styled(Card)`
    height:100%;
    border:1px solid ${palette('border')};
    border-radius:5px;
`
const LightHeader = styled('h4')`
    font-weight:200;
    margin:0;
`
const RoundImage = styled('img')`
    border-radius:50%;
    margin:0 5px;
`
const RoundStatus = styled('div')`
    height:10px;
    width:10px;
    border-radius:50%;
    margin-right:-15px;
    z-index:1;
    background-color:${ifProp('active','#4f4',"#f44")};
`

const LeftCard = (props)=>(
    <Flex column>
        <FlexView style={{margin:"5px 8px"}}>
            <RoundStatus active/>
            <RoundImage src = {"https://placekitten.com/100/200"} height = {30} width={30}/>
            <LightHeader as='h3'>{Faker.name.findName()}</LightHeader>
        </FlexView>
        <FlexView style={{margin:"5px"}}>
                <MdBookmark color={'purple'} fontSize={17}/>
                <div>
                    {Faker.helpers.createCard().address.city}  {Faker.helpers.createCard().address.country} {Faker.helpers.createCard().address.state}    
                </div>
        </FlexView>
        <FlexView style={{margin:"5px"}}>
                <MdBookmark color={'#3c3'} fontSize={17}/>
                <div>
                    {Faker.helpers.createCard().address.city}  {Faker.helpers.createCard().address.country} {Faker.helpers.createCard().address.state}    
                </div>
        </FlexView>
        <FlexView style={{margin:"5px"}}>
                <MdHourglassFull color={'#333'} fontSize={17}/>
                <div>
                    {Moment(Faker.date.recent().toLocaleString()).fromNow()}     
                </div>
        </FlexView>
    </Flex>
)

const CheckPointView = (props)=>(
    <FlexView>
        <FaTruck fontSize={16}/>
        <div style={{flex:"1 0 auto",padding:"0px 3px"}}>
            {Faker.helpers.createCard().address.city}
        </div>

        <span style={{padding:"0px 3px"}}>
            {Moment(Faker.date.recent().toLocaleString()).fromNow(true)} 
        </span>
    </FlexView>
)

const RightCard = (props)=>(
    <Card flex="1" borderLeft="1px dashed" overflowY = "hidden" borderColor={palette('border')}>
        <Flex as='h4' style={{marginTop:"0"}}>
            <div style={{flexGrow:1}}>
                Recent Checkpoints
            </div>
            <div>
                <ButtonLink title="Show Details">
                    <MdMore fontSize={16}/>
                </ButtonLink>
            </div>
        </Flex>
        <CheckPointView/>
        <CheckPointView/>
        <CheckPointView/>
        <CheckPointView/>
        <CheckPointView/>
    </Card>
)

const UserTaskCard = (props)=>(
    <BorderedCard width={props.active ? "600px":"300px"}  padding="0px" margin="5px 10px 0" overflowY="auto">
        <FlexView grow style={{minHeight:"80%"}} >
            <LeftCard {...props}/>
            {
                props.active && <RightCard {...props}/>
            }
        </FlexView>
    </BorderedCard>
)
export default UserTaskCard