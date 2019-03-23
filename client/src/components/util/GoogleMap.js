import React,{Component} from 'react'
import {Map, GoogleApiWrapper,Polyline, Marker} from 'google-maps-react';

import Loading from './Loading'
export class GoogleMap extends Component {
  moveMarker(event){
  }
  render() {
    const triangleCoords = [
      {lat: 11.721, lng: 78.65},
      {lat: 13.174, lng: 78.65}
    ];
    const triangleCoords2 = [
      {lat: 10.774, lng: 76.75},
      {lat: 10.784, lng: 76.95},
      {lat: 10.789, lng: 77.05},
      {lat: 10.789, lng: 77.10},
      {lat: 10.799, lng: 77.15},
      {lat: 10.819, lng: 77.25},
      {lat: 10.989, lng: 77.35},
      {lat: 11.066, lng: 77.55},
      {lat: 11.721, lng: 78.65}
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
                strokeOpacity={0}
                strokeWeight={5} 
                icons= {[{
                  icon: {
                    path: 'M 0,-1 0,1',
                    strokeOpacity: 1,
                    scale: 4
                  },
                  offset: '0',
                  repeat: '20px'
                }]}
              />

              <Polyline
                path={triangleCoords2}
                strokeColor="#3c3"
                strokeOpacity={1}
                strokeWeight={5}
              />
              {
              triangleCoords2.map((latLng,index)=>(

                  <Marker
                    position={latLng}
                    icon={{
                    url: "/assets/current_location.svg",
                    anchor: new this.props.google.maps.Point(16,16),
                    scaledSize:new this.props.google.maps.Size(32,32)
                    }}
                  />
              ))
              }
              <Marker
                  position={{lat: 13.174, lng: 78.65}}
                  icon={{
                  url: "/assets/destination.svg",
                  anchor: new this.props.google.maps.Point(24,24),
                  scaledSize:new this.props.google.maps.Size(48,48)
                  }}
              />
              <Marker
                  position={{lat: 10.774, lng: 76.75}}
                  draggable={true}
                  onDragend={this.moveMarker.bind(this)}
                  icon={{
                  url: "/assets/source.svg",
                  anchor: new this.props.google.maps.Point(24,24),
                  scaledSize:new this.props.google.maps.Size(48,48)
                  }}
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