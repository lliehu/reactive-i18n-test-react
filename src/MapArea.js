import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { Map, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';


import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerRetinaIcon from 'leaflet/dist/images/marker-icon-2x.png'
import shadowIcon from 'leaflet/dist/images/marker-shadow.png'

leaflet.Icon.Default.imagePath = ' ' // Set image path to non-empty to prevent Leaflet from trying to auto-detect it and fail horribly.
leaflet.Icon.Default.prototype.options.iconUrl = markerIcon
leaflet.Icon.Default.prototype.options.iconRetinaUrl = markerRetinaIcon
leaflet.Icon.Default.prototype.options.shadowUrl = shadowIcon
leaflet.Icon.Default.prototype.options.shadowRetinaUrl = shadowIcon

const mapState = {
  lat: 61.45,
  lng: 23.85,
  zoom: 12,
}

const position = [mapState.lat, mapState.lng];

const MapArea = (props) => {
  const [markerList, setMarkerList] = useState([position]);
  const { t } = useTranslation();
  const zoomInTitle = t('zoomInTitle');
  const zoomOutTitle = t('zoomOutTitle');

  function addMarker(event) {
    props.addLogMessage('markerAddedMessage', {
      position: event.latlng.toString()
    })
    let marker = leaflet.marker(event.latlng)
    marker.bindPopup(event.latlng.toString())
    setMarkerList(markerList.concat([event.latlng]))
  }

  return (
    <div>
      <h2>{t('mapTitle')}</h2>
      <Map center={position} zoom={mapState.zoom} zoomControl={false}
        onClick={addMarker}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { markerList.map((marker, index) => (
          <Marker position={marker}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
          </Marker>
        )) }
        {/* Using key forces remounting of ZoomControl when zoomInTitle or zoomOutTitle change. */}
        <ZoomControl zoomInTitle={zoomInTitle} zoomOutTitle={zoomOutTitle} key={zoomInTitle + '|' + zoomOutTitle}/>
      </Map>
    </div>
  );
};

export default MapArea;
