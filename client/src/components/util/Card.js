import { styled,css,withTheme} from 'reakit'
import {theme,palette} from 'styled-tools'
const Card = styled.div`
    background: ${props=>props.background || props.theme.background};
    color: ${props=>props.color || props.theme.color};
    ${
        props=>!props.noShadow && css`
            box-shadow: ${theme("shadowX")}px 
                        ${theme("shadowY")}px 
                        ${theme("shadowBlur")}px 
                        ${palette("shadow",-1)}
        `
    }

`
export default withTheme(Card)