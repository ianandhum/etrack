import {createGlobalStyle,withTheme} from 'reakit'

const GlobalStyle = createGlobalStyle`
body {
  margin:0;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color:${props=>props.theme.color};
  background-color:${props=>props.theme.background}
}
*{
  box-sizing:border-box;
}
`

export default withTheme(GlobalStyle)