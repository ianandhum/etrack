import React,{Component} from 'react'
import ShortHelmet from '../helpers/ShortHelmet';

class EtrackMain extends Component{
    render(){
        return(
            <>    
                <ShortHelmet/>
                {process.env.REACT_APP_NAME}
            </>
        )
    }
}
export default EtrackMain