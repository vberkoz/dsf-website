import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import marker from "@/public/female-white-brown-hair-001.png";
import { Icon } from "leaflet";

export default function Map() {
  return (
    <MapContainer
      center={[39.8097343, -98.5556199]}
      zoom={4}
      scrollWheelZoom={false}
      className="h-96 w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[39.8097343, -98.5556199]} icon={new Icon({iconUrl: marker.src, iconSize: [50, 50], iconAnchor: [25, 25]})}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
