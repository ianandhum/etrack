import {createGlobalStyle,withTheme} from 'reakit'

const GlobalStyle = createGlobalStyle`
body {
  margin:0;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color:${props=>props.theme.color};
  background-color:${props=>props.theme.background};
  font-size:13px;
}
*{
  box-sizing:border-box;
}
`

export default withTheme(GlobalStyle)