import React,{Component} from 'react'
import {Map, GoogleApiWrapper,Polyline, Marker} from 'google-maps-react';
import {connect} from 'react-redux'

import Loading from '../util/Loading'
import { vSetActiveTask } from '../../data/actions/active_tasks';

class MapLayout extends Component {
  constructor(props){
    super(props);
    this.state={
      center:{lat:0,lng:0}
    }
  }
  autoCenter(checkpoints){
    let center = this.props.checkpoints[this.props.checkpoints.length-1];
    if(checkpoints){
      center = checkpoints[checkpoints.length-1];
    }
    var bounds = new this.props.google.maps.LatLngBounds();
    var points = this.props.checkpoints;
    points.push(this.props.to);
    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }

    this.setState({
      center:center,
      bounds:bounds
    })
  
  }
  componentDidMount(){
    this.autoCenter();
  }
  componentWillReceiveProps(newProps){
    this.autoCenter(newProps.checkpoints);
  }
  render() {
    return (
        <Map 
            google={this.props.google}
            disableDefaultUI={true}
            bounds={this.state.bounds}
            center={this.state.center}
            
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
    
    var activeRouteData = {}
    if(ownProps.taskId){
      activeRouteData =(state.tasks.view.selected.id)?state.tasks.view.selected.checkpointsRaw:{}
    }
    else if(state.tasks.view.active.activeIndex>=0 ){
      activeRouteData = state.tasks.active[state.tasks.view.active.activeIndex].checkpointsRaw
    }
    
    return {
        checkpoints:activeRouteData.checkpoints,
        to:activeRouteData.to,
        loaded:!state.tasks.view.waiting
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    mapReadyHandle: () => {
      dispatch(vSetActiveTask(0))
    }
  }
}


export default  connect(mapStateToProps,mapDispatchToProps)(WrappedMap)