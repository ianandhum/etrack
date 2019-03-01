import {styled,css,withTheme, Box} from 'reakit'
import {prop,theme} from 'styled-tools'

const Card = styled(Box)`
    border-width: ${prop('width',1)}px;
    border-style: ${props=>props.borderStyle || 'solid'};
    border-color: ${theme('border')};
    ${
        props=>props.rounded && css`
            border-radius: ${theme('roundness')}px
        `
    }
`

export default withTheme(Card)