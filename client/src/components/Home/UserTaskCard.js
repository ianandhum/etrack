import React from 'react'
import {styled,Card} from 'reakit'
import {palette,ifProp} from 'styled-tools'
import FlexView from 'react-flexview'
import { MdBookmark, MdHourglassFull } from 'react-icons/md';
import { FaTruck } from 'react-icons/fa';

import Moment from 'moment'

import Faker from 'faker'



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
    <FlexView column>
        <FlexView style={{margin:"5px 8px"}}>
            <RoundStatus active/>
            <RoundImage src = {"https://placekitten.com/" + Faker.random.number()%1000+"/200"} height = {30} width={30}/>
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
    </FlexView>
)
const RightCard = (props)=>(
    <Card flex="1" borderLeft="1px dashed" overflowY = "hidden" borderColor={palette('border')}>
        <h4 style={{marginTop:"0"}}>Recent Checkpoints</h4>
        <CheckPointView/>
        <CheckPointView/>
        <CheckPointView/>
    </Card>
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

const UserTaskCard = (props)=>(
    <BorderedCard width={props.active ? "600px":"300px"} margin="5px 10px 0">
        <FlexView>
            <LeftCard {...props}/>
            {
                props.active && <RightCard {...props}/>
            }
            
            
        </FlexView>

    </BorderedCard>
)
export default UserTaskCard;