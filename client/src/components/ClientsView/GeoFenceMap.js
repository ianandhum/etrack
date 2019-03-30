import React,{Component} from 'react'
import {Map, GoogleApiWrapper,Polygon, Marker} from 'google-maps-react';
import {connect} from 'react-redux'

import Loading from '../util/Loading'
import FloatMenu from './FloatMenu'
import GeoCodeView from './GeoCodeView'
import { saveFence } from '../../data/actions/clients';

class GeoFenceMap extends Component {
  constructor(props){
    super(props);
    this.state={
        fenceCoords:[],
        dirty:false
    }
    this.onClickMap = this.onClickMap.bind(this)
    this.clearFence = this.clearFence.bind(this)
    this.undo = this.undo.bind(this)
    this.geoCoder = null;
  }

  
  onClickMap(props,map,event){
        this.setState((prevState)=>({
            fenceCoords:[...prevState.fenceCoords,event.latLng],
            dirty:true
        }))
  }
  clearFence(){
    this.setState((prevState)=>({
        fenceCoords:[],
        dirty:false
    }))
  }
  undo(){
    this.setState((prevState)=>{
        prevState.fenceCoords.pop();
        return {
            fenceCoords:prevState.fenceCoords
        }
    })
  }
  componentWillMount(){
    this.geoCoder = new this.props.google.maps.Geocoder()
  }
  componentWillUnmount(){
    this.geoCoder = null
  }
  render() {
    return (
        <>
            <FloatMenu 
                showSave = {this.state.dirty} 
                save= {()=>this.props.saveFence(this.state.fenceCoords)} 
                clearAll = {this.clearFence}/>
            
            <Map 
                google={this.props.google}
                disableDefaultUI={true}
                onClick={this.onClickMap}
                mapTypeControl= {true}
            >
                <GeoCodeView/>
                <Polygon
                    paths={this.state.fenceCoords}
                    strokeColor="#333"
                    strokeOpacity={0}
                    strokeWeight={5}
                />
            
                
                {
                this.state.fenceCoords.map((latLng,index)=>(
                        <Marker
                        position={latLng}
                        key={index}
                        icon={{
                            url: "/assets/marker_point.svg",
                            anchor: new this.props.google.maps.Point(6,6),
                            scaledSize:new this.props.google.maps.Size(12,12),
                        }}
                        />
                    )
                    )
                } 
            </Map>
        </>
    );
  }
}

const LoadingContainer = ()=>(
  <Loading style={{height:"50vh"}}/>
)

const WrappedMap = GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    LoadingContainer: LoadingContainer
})(GeoFenceMap)





const mapStateToProps = (state, ownProps) => {

    return {
        fenceCoords:state.client.view.fenceCoords
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveFence: (fence) => {
      dispatch(saveFence(fence))
    }
  }
}


export default  connect(mapStateToProps,mapDispatchToProps)(WrappedMap)