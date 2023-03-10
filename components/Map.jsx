import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import { useEffect } from "react";

import marker from "@/public/female-white-brown-hair-001.png";
import * as L from "leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet.markercluster";

var personIcon = L.icon({
  iconUrl: marker.src,
  iconSize: [50, 50],
  iconAnchor: [25, 25],
});

const recruiters = [
  {
    name: "Alice",
    cityState: "St Matthews, KY, United States",
    skillSet: "20+ yrs Outside Sales - Enterprise, Cloud, Software, Contract Design",
    lat: 38.249880000000005,
    lng: -85.63574235919543,
  },
  {
    name: "Vicki",
    cityState: "Morgantown, WV, United States",
    skillSet: "20+ yrs Outside Sales-Risk Mgt, Fraud Prevention, eCommerce. Retail, Cybersecurity, Insurance, Utilities, Telecom, New/Emerging Mkts",
    lat: 39.6296809,
    lng: -79.9559437,
  },
  {
    name: "Jestine Matthews",
    cityState: "Saint Cloud, Stearns County, Minnesota, USA",
    skillSet: "20+ yrs Business Development, Supply Chain, Robotics, Technology Solutions, Financial, Enterprise",
    lat: 45.5616075,
    lng: -94.1642004,
  },
];

const addressToCoords = async (address) => {
  const provider = new OpenStreetMapProvider();
  return await provider.search({ query: address });
};

const addressToCoordsBulk = async (addresses) => {
  var coords = [];
  addresses.map((address) => {
    addressToCoords(address.cityState).then((result) => {
      coords.push({
        ...address,
        lat: result[0].y,
        lng: result[0].x,
      });
    });
  });
  await console.log(coords);
};

export default function Map() {
  addressToCoordsBulk(recruiters);
  useEffect(() => {
    var container = L.DomUtil.get("map");
    if (container != null) {
      container._leaflet_id = null;
    }

    var tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
        attribution: "© OpenStreetMap",
      }
    );
    var latlng = L.latLng(39.8097343, -98.5556199);

    var map = L.map("map", {
      center: latlng,
      zoom: 4,
      layers: [tiles],
      dragging: true,
    });

    var markers = L.markerClusterGroup({
      chunkedLoading: true,
    });

    recruiters.map((recruiter) => {
      addressToCoords(recruiter.cityState).then((result) => {
        var marker = L.marker(L.latLng(result[0].y, result[0].x), {
          icon: personIcon,
          title: recruiter.name,
        });
        marker.bindPopup(recruiter.name);
        markers.addLayer(marker);
      });
    });

    map.addLayer(markers);
  }, []);

  return <div id="map" className="h-96 w-full"></div>;
}
