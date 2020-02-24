import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Card, CardBody, CardTitle, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Button } from 'reactstrap';

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
  const [markerComments, setMarkerComments] = useState({});
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [modal, setModal] = useState(false);
  const [newMarkerCommentText, setNewMarkerCommentText] = useState('');
  const toggle = () => setModal(!modal);
  const { t, i18n } = useTranslation();
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
    <Card>
      <CardBody>
        <CardTitle>{t('mapTitle')}</CardTitle>
      </CardBody>
      <Map center={props.center} zoom={mapState.zoom} zoomControl={false}
        onClick={addMarker}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { markerList.map((marker, index) => (
          <Marker key={index} position={marker}>
            <Popup>
              {(markerComments[marker] || []).map((comment) => (
                <p>
                  <span>
                    {t('commentPrefix', {time: new Intl.DateTimeFormat(i18n.language, {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                      second: 'numeric'
                    }).format(comment.time)})}
                  </span>
                  <br/>
                  {comment.text}
                </p>
              ))}
              <Button color="primary" onClick={() => {setSelectedMarker(marker); toggle();}}>{t('addNewCommentButton')}</Button>
            </Popup>
          </Marker>
        )) }
        {/* Using key forces remounting of ZoomControl when zoomInTitle or zoomOutTitle change. */}
        <ZoomControl zoomInTitle={zoomInTitle} zoomOutTitle={zoomOutTitle} key={zoomInTitle + '|' + zoomOutTitle}/>
      </Map>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{t('addNewCommentTitle')}</ModalHeader>
        <ModalBody>
          <Input type="textarea" value={newMarkerCommentText} onChange={(event) => setNewMarkerCommentText(event.target.value)}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => {setMarkerComments(Object.assign({}, markerComments, {[selectedMarker]: (markerComments[selectedMarker] || []).concat({time: new Date(), text: newMarkerCommentText})})); toggle(); setNewMarkerCommentText('')}}>{t('addNewCommentButton')}</Button>{' '}
          <Button color="secondary" onClick={toggle}>{t('cancelButton')}</Button>
        </ModalFooter>
      </Modal>
    </Card>
  );
};

export default MapArea;
