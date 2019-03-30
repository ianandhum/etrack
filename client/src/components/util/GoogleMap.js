import React,{Component} from 'react'
import {Map, GoogleApiWrapper,Polyline, Marker} from 'google-maps-react';

import Loading from './Loading'
import MapDarkStyle from './MapDarkStyle';
export class GoogleMap extends Component {
  
  render() {
   
    return (
        <Map 
            google={this.props.google} 
            zoom={7} 
            disableDefaultUI={true}
            styles={MapDarkStyle}
        >
          
              
        </Map>
    );
  }
}

const LoadingContainer = ()=>(
  <Loading style={{height:"50vh"}}/>
)

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  LoadingContainer: LoadingContainer
})(GoogleMap)