import React,{Component} from 'react'
import {withTheme} from 'reakit'
import FlexView from 'react-flexview/lib';
import {Link} from 'react-router-dom'
import {Button,Group} from 'reakit';

import ShortHelmet from '../helpers/ShortHelmet';
import Page from '../components/shared/Page'
import GoogleMap from '../components/util/GoogleMap'
import Card from '../components/util/Card';



class Home extends Component{
    render(){
        
        return(
            <>    
                <ShortHelmet/>
                <Page>
                    <FlexView column grow>
                        <div style={{minHeight:"calc( 100vh - 60px )",width:"calc( 100vw)",position:"relative"}}>
                            <GoogleMap/>
                            
                            <Card
                                style={{
                                    position:"absolute",
                                    width:"96%",
                                    margin:"0px 2%",
                                    bottom:0,
                                    borderTopLeftRadius:"5px",
                                    borderTopRightRadius:"5px"
                                      
                                }}
                            >

                                <FlexView>
                                    <Group style={{padding:"0 10px",margin:"10px"}}>
                                        <Button palette='primary' tone={-1} >Awesome</Button> 
                                        <Button use={Link} to = "/d"  >Awesome</Button>
                                        <Button use={Link} to = "/vf"  >Awesome</Button>
                                    </Group>
                                </FlexView>
                                <FlexView hAlignContent="center" grow>
                                </FlexView>


                            </Card>
                        </div>
                    </FlexView>
                    
                </Page>
            </>
        )
    }
}
export default withTheme(Home)