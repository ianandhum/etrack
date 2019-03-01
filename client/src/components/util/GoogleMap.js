import React,{Component} from 'react'
import {Map,Marker, GoogleApiWrapper} from 'google-maps-react';

import Loading from './Loading'
export class GoogleMap extends Component {
  render() {
    
    return (
        <Map 
            google={this.props.google} 
            zoom={5} 
            disableDefaultUI={true}
            initialCenter={{
                lat: 10.85,
                lng: 76.05
            }}
        >
            <Marker/>

        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  LoadingContainer: Loading
})(GoogleMap)