import React,{Component} from 'react'
import {Map, GoogleApiWrapper,Polygon, Marker} from 'google-maps-react';
import {connect} from 'react-redux'

import Loading from '../util/Loading'

class ClientLocMap extends Component {
  render() {
    return (
        <>
            
            <Map 
                google={this.props.google}
                disableDefaultUI={true}
            >
                <Polygon
                    paths={this.props.fenceCoords}
                    fillColor="#333"
                    fillOpacity={0.7}
                    strokeColor="#333"
                    strokeOpacity={0}
                    strokeWeight={5}
                />
            
                
                {
                this.props.fenceCoords.map((latLng,index)=>(
                        <Marker
                        position={latLng}
                        key={index}
                        icon={{
                            url: "/assets/marker_point.svg",
                            anchor: new this.props.google.maps.Point(12,12),
                            scaledSize:new this.props.google.maps.Size(24,24),
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
})(ClientLocMap)





const mapStateToProps = (state, ownProps) => {

    return {
        fenceCoords:state.client.view.fenceCoords
    }

}


export default  connect(mapStateToProps)(WrappedMap)