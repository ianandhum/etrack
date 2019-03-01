import React from 'react'
import {Link} from 'react-router-dom'
import {styled,withTheme} from 'reakit'

import {Button} from "../components/util/Buttons"
import ShortHemlet from '../helpers/ShortHelmet'
import Page from '../components/shared/Page';


const RouteNotFound = (props)=>{

    const BorderedBox = styled.div`
    padding:30px 20px;
    width:60vw;
    margin:auto;
    margin-top:15%;
    
    @media only screen and (max-width: 500px){
        width:100vw;
        margin-top:1%;
        padding:10px;
    }`

    const BigText = styled.h2`
        font-size:3em;
        margin:20px 0;
    `
    return (
        <>
            <ShortHemlet title = "Page Not Found"/>
            <Page>
                <BorderedBox>
                    <BigText>404</BigText>
                    <div>The requested page was not found </div>
                    <Button use={Link} to = "/" palette = "secondary" tone="1" margin="10px 0" >Go Back</Button>
                </BorderedBox>
            </Page>
        </>
    )
}



export default withTheme(RouteNotFound)

