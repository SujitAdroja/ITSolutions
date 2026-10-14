import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const locations = [
  {
    name: "London",
    address: "Unit 1, Liberty Centre, Mount Pleasant, Wembley, HA0 1TX",
    position: [51.556, -0.2797],
  },
];

export default function OfficeMap() {
  return (
    <MapContainer
      center={[51.556, -0.2797]}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        height: "100%",
        minHeight: "360px",
        width: "100%",
      }}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((location) => (
        <Marker
          key={location.name}
          position={location.position as [number, number]}
          icon={markerIcon}
        >
          <Popup>
            <strong>{location.name}</strong>
            <br />
            {location.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
