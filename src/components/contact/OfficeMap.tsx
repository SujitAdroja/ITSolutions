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
    address: "35 Sidmouth Close",
    position: [51.6298, -0.3966],
  },
  {
    name: "Canada",
    address: "25 Mabelle Avenue",
    position: [43.6438, -79.5314],
  },
  {
    name: "India",
    address: "604 Sahitya Business Park",
    position: [23.0714, 72.6699],
  },
  {
    name: "Australia",
    address: "6/21 Railway Parade",
    position: [-33.8036, 150.9879],
  },
];

export default function OfficeMap() {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{
        height: "700px",
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