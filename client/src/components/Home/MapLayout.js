import React,{Component} from 'react'
import {Map, GoogleApiWrapper,Polyline, Marker} from 'google-maps-react';
import {connect} from 'react-redux'

import Loading from '../util/Loading'
export class MapLayout extends Component {
  
  render() {
    console.log(this.props)
    return (
        <Map 
            google={this.props.google} 
            zoom={7} 
            disableDefaultUI={true}
            center={this.props.checkpoints[this.props.checkpoints.length-1]}
            initCenter={{
              lat:11.3,
              lng:76.5
            }}
        >
          
              <Polyline
                path={[
                    this.props.checkpoints[this.props.checkpoints.length-1],
                    this.props.to
                ]}
                strokeColor="#333"
                strokeOpacity={0}
                strokeWeight={5} 
                icons= {[{
                  icon: {
                    path: 'M 0,-1 0,1',
                    strokeOpacity: 0.5,
                    scale: 4
                  },
                  offset: '0',
                  repeat: '20px'
                }]}
              />

              <Polyline
                path={this.props.checkpoints}
                strokeColor="#51cc71"
                strokeOpacity={0.6}
                strokeWeight={5}
              />
              {
              this.props.checkpoints.map((latLng,index)=>(
                    <Marker
                      position={latLng}
                      icon={{
                      url: "/assets/current_location.svg",
                      anchor: new this.props.google.maps.Point(16,16),
                      scaledSize:new this.props.google.maps.Size(32,32),
                      label:(this.props.checkpoints.length-1 === index )?"Current Location":""
                      }}
                    />
                  )
                )
              }
              <Marker
                  position={this.props.to}
                  icon={{
                  url: "/assets/destination.svg",
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

const WrappedMap = GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    LoadingContainer: LoadingContainer
  })(MapLayout)


const mapStateToProps = (state, ownProps) => {
    const activeRouteData = state.tasks.active[state.tasks.view.active.activeIndex].checkpointsRaw
    return {
        checkpoints:activeRouteData.checkpoints,
        to:activeRouteData.to
    }
}

export default  connect(mapStateToProps)(WrappedMap)