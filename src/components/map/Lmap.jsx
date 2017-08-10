import React from 'react';
import { Map, LayerGroup, Circle, Marker, Popup } from 'react-leaflet'
import './leaflet.css';
// import ExWMSTileLayer from './ExWMSTileLayer';
import { connect } from 'react-redux';
import './leaflet.ChineseTmsProviders';

class Lmap extends React.Component {
  componentDidMount () {
    this.map = L.map('map').setView(this.props.centerPoint, 3);
    L.tileLayer.chinaProvider('Geoq.Normal.Map', {
      maxZoom: 18,
      minZoom: 3
    }).addTo(this.map);
    this.addToMap (this.props.data);
  }
   componentWillReceiveProps (prevProps) {
    this.addToMap(prevProps.data)
  }
  addToMap (mapdata) {
    // var myIcon = L.icon({
    //     iconUrl: './images/marker-icon.png',
    //     iconSize: [24, 36],
    //     iconAnchor: [14, 36],
    //     popupAnchor: [0, -34]
    // });
    let data = mapdata || []
    if (this.markerlabels != undefined) { this.map.removeLayer(this.markerlabels) }
    this.markerlabels = new L.FeatureGroup().addTo(this.map)
    for (var i = 0; i < data.length; i++) {
      let latlng = [Number(data[i].latlng[0]),Number(data[i].latlng[1])];
      // this.markerlabels.addLayer(
      //   new L.Marker(latlng,{icon:myIcon,color:"blue",fillColor:"green",radius:1000})
      // );
      this.markerlabels.addLayer(
        new L.popup({autoClose:false}).setLatLng(latlng).setContent(`<p>${data[i].name}</p>`)
      )
      this.markerlabels.addLayer(
        new L.circle(latlng,{color:"blue",fillColor:"green",radius:1000})
      )
    }
    this.map.addLayer(this.markerlabels)
  }
  render () {
    const { data, centerPoint } = this.props;  
    if(this.map)this.map.setView(centerPoint, 6);  
    // var circle = null;
    // var marker = null;
    // var myIcon = L.icon({
    //     iconUrl: './images/marker-icon.png',
    //     iconSize: [24, 36],
    //     iconAnchor: [14, 36],
    //     popupAnchor: [0, -34]
    // });
    // if(data!=null){
    //   circle = data.map((li,i) => {
    //     let latlng = [Number(li.latlng[0]),Number(li.latlng[1])];
    //     return <Circle center={latlng} key={i} color="blue" fillColor="green" radius={1000} />
    //   });
    //   marker = this.props.data.map((li,i) => {
    //     let latlng = [Number(li.latlng[0]),Number(li.latlng[1])];
    //     return <Marker position={latlng} icon={myIcon} key={i}>
    //               <Popup>
    //                 <span>{li.name}</span>
    //               </Popup>
    //             </Marker>
    //   });
    // }
    // return  <Map style={{height:'540px', border: '1px solid #e4ecf3', borderRadius: 4}} center={centerPoint} zoom={10}>
    //           <ExWMSTileLayer type="Geoq.Normal.Map" options={{ maxZoom:18,minZoom:3}}/>
    //           <LayerGroup>
    //              {circle}  
    //              {marker}           
    //           </LayerGroup>
    //         </Map>
       return <div id='map' style={{height: '540px'}} />
    
  }
};

function mapStateToProps(state) {
  return {
    centerPoint: state.map.center
  }
};
Lmap = connect(
  mapStateToProps
)(Lmap);

export default Lmap;