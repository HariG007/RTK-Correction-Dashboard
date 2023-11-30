import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = ({ markers }) => {
  const [center, setCenter] = useState([0, 0]);

  useEffect(() => {
    if (markers.length > 0) {
      const totalX = markers.reduce((acc, marker) => acc + marker.x, 0);
      const totalY = markers.reduce((acc, marker) => acc + marker.y, 0);
      setCenter([totalX / markers.length, totalY / markers.length]);
    }
  }, [markers]);

  return (
    <div style={{ marginTop: '30px' ,overflow:'hidden'}}>
      <MapContainer center={center} zoom={14} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=YOUR_MAPBOX_ACCESS_TOKEN`}
          attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors'
          id="mapbox/streets-v11"
        />

        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.x, marker.y]}>
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
