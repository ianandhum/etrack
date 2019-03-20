import React,{Component} from 'react'
import {Map, GoogleApiWrapper,Polyline,Circle} from 'google-maps-react';

import Loading from './Loading'
export class GoogleMap extends Component {
  render() {
    const triangleCoords = [
      {lat: 10.774, lng: 76.95},
      {lat: 11.066, lng: 77.55},
      {lat: 11.721, lng: 78.65},
      {lat: 12.374, lng: 79.05},
      {lat: 13.174, lng: 78.65}
    ];
    const triangleCoords2 = [
      {lat: 10.774, lng: 76.95},
      {lat: 11.066, lng: 77.55},
      {lat: 11.721, lng: 78.65},
    ];
    
    

  
    return (
        <Map 
            google={this.props.google} 
            zoom={7} 
            disableDefaultUI={true}
            initialCenter={{
              lat: 11.721, 
              lng: 78.65
            }}
        >
        <Polyline
          path={triangleCoords}
          strokeColor="#333"
          strokeOpacity={0.8}
          strokeWeight={5} />

        <Polyline
          path={triangleCoords2}
          strokeColor="#3f3"
          strokeOpacity={0.8}
          strokeWeight={5} />
        
        <Circle 
              center = {{lat: 10.774, lng: 76.95}} 
              radius = {1000}
              strokeColor='transparent'
              strokeOpacity={0}
              strokeWeight={5}
              fillColor='#3f3'
              fillOpacity={0.2}
          />

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