import {styled,withTheme} from 'reakit'

const Button =styled.a`
font-size:1.3em;
align-items:center;    
text-align:center;
padding:0px 10px;
width:100%;
height:100%;
display:flex;
background-color:${props=> props.theme.primary};
color:${props=>props.theme.light};
text-decoration:none;
`
export default withTheme(Button)