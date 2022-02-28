import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { useContext, useState, useEffect } from "react";
import locationIcon from "../assets/icon-location.svg";
import leaflet from "leaflet";
import IPContext from "../context/IPContext";

const MapComponent = () => {
  const [lat, setLat] = useState(51.505);
  const [lng, setLng] = useState(-0.09);
  const { trackerData } = useContext(IPContext);

  useEffect(() => {
    if (trackerData.location !== undefined) {
      setLat(trackerData.location.lat);
      setLng(trackerData.location.lng);
    }
  }, [trackerData.location]);

  const latlng = leaflet.latLng(lat, lng);

  const pointerIcon = new leaflet.Icon({
    iconUrl: locationIcon,
    iconSize: [40, 50],
  });

  const ChangeMap = ({ center }) => {
    const map = useMap();
    map.setView(center, 13);
    return null;
  };

  return (
    <MapContainer
      center={latlng}
      zoom={13}
      zoomControl={false}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeMap center={latlng} />
      <Marker icon={pointerIcon} position={latlng}></Marker>
    </MapContainer>
  );
};

export default MapComponent;
