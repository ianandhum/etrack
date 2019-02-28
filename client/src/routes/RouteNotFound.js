import React from 'react'

import {Link} from 'react-router-dom'
import styled,{withTheme} from 'styled-components'

const RouteNotFound = (props)=>{

    const Button = styled.button`
    display: inline-block;
    color: ${props.theme.primary};
    font-size: 1em;
    margin: 1em 0;
    padding: 0.25em 1em;
    border: 2px solid ${props.theme.primary};
    border-radius: 3px;
    cursor:pointer;
    text-decoration:none;
    
    :visited{
        color:${props.theme.secondary};
        border-color:${props.theme.secondary};
    }
    :hover{
        color:${props.theme.hover};
        border-color:${props.theme.hover};
        
    }
    `;

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
        <BorderedBox>
            <BigText>404</BigText>
            <div>The requested file was not found </div>
            <Button as={Link} to = "/">Go Back</Button>
        </BorderedBox>
    )
}



export default withTheme(RouteNotFound)

