import React from 'react'
import {withTheme,styled,Block,InlineBlock} from 'reakit'
import {palette} from 'styled-tools'
import ScaleLoader  from "react-spinners/ScaleLoader";

const InputView = styled('input')`
    padding:9px 15px;
    border:2px solid ${palette('grayscale',-2)};
    border-radius:3px;
    box-shadow:1px 1px 6px rgba(0,0,0,0.1);
    background:white;
    width:300px;
    &:hover{
        border:2px solid ${palette('primary')};
    }
    &:focus{
        border:2px solid ${palette('primary')};
    }
    
`

const BlockLeft = styled(Block)`
    position:absolute;
    left:200px;
    top:10px;
    z-index:1;
    
`
const BlockRight = styled(Block)`
    position:absolute;
    right:14px;
    top:10px;
    z-index:1;
`



class GeoCodeView extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchAddress:"",
            loading:false
        }
        this.handleSearchAddressChange = this.handleSearchAddressChange.bind(this)
        this.setMapCenter = this.setMapCenter.bind(this)
    }

    geoCodeString(address,callback){

        this.setState({
            loading:true
        })

        this.geoCoder.geocode({'address': address}, (results, status)=>{
            
            this.setState({
                loading:false
            })

            if(typeof(callback) === 'function'){
                if (status === 'OK') {
                    callback(results[0].geometry.location)
                }
                else{
                    console.log("Error getting address info "+ status)
                }
            }
        })
    }

    setMapCenter(latLng){
        this.props.map.setCenter(latLng);
        //hacky way to zoom auto
        // let newBounds = [
        //     {
        //         lat:latLng.lat-0.1,
        //         lng:latLng.lng
        //     },
        //     {
        //         lat:latLng.lat,
        //         lng:latLng.lng+0.1
        //     },
        //     {
        //         lat:latLng.lat+0.1,
        //         lng:latLng.lng
        //     },
        //     {
        //         lat:latLng.lat,
        //         lng:latLng.lng-0.1
        //     }
        // ]
        //this.setBounds(newBounds)
    }

    setBounds(checkpoints){
        var bounds = new this.props.google.maps.LatLngBounds();
        var points = checkpoints;
        for (var i = 0; i < points.length; i++) {
        bounds.extend(points[i]);
        }
        this.setState({
        bounds:bounds
        })
        this.props.map.fitBounds(bounds)

    }
    
    componentWillMount(){
      this.geoCoder = new this.props.google.maps.Geocoder()
    }
    componentWillUnmount(){
      this.geoCoder = null
    }
    handleSearchAddressChange(event){
        this.setState({
            searchAddress:event.target.value
        })
        this.geoCodeString(event.target.value,this.setMapCenter)
    }
    render(){
        return (
            <BlockLeft>
                <InlineBlock position="relative">
                    <InputView 
                        value={this.state.searchAddress} 
                        onChange ={this.handleSearchAddressChange} 
                        placeholder="Search an address"/>
                    {
                        this.state.loading &&
                        <BlockRight>
                            <ScaleLoader height={15} width={1}/>
                        </BlockRight>
                    }
                </InlineBlock>

            </BlockLeft>
        )
    }
}

export default withTheme(GeoCodeView)