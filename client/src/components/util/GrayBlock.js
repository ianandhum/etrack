import {styled,Block} from 'reakit'
import {palette} from 'styled-tools'

export default styled(Block)`
    min-height:calc( 100vh - 50px );
    width:calc( 100vw);
    position:relative;
    background-color:${palette('grayscale',-2)};
`

