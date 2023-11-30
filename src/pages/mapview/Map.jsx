import React, { useState } from 'react';
import MapComponent from './MapComp';
import LocalizationComponent from './LocalizationComp';

function App() {
  const [markers, setMarkers] = useState([]);
  const [localizedObject, setLocalizedObject] = useState({ name: '', x: 0, y: 0, z: 0 });
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);

  const localizeObject = () => {
    const localizedObjectName = 'Localized Object';

    setLocalizedObject({ name: localizedObjectName, x, y, z });
    setMarkers([{ name: localizedObjectName, x, y }]);
  };

  return (
    <div>
      <h1>Object Localization Map</h1>
      <LocalizationComponent
        object={localizedObject}
        localizeObject={localizeObject}
        x={x}
        y={y}
        z={z}
        setX={setX}
        setY={setY}
        setZ={setZ}
      />
      <MapComponent markers={markers} />
    </div>
  );
}

export default App;
