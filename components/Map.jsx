import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import { useEffect } from "react";
import ReactDOMServer from "react-dom/server";

import femaleWhiteBrownHair0001 from "@/public/avatars/female-white-brown-hair-0001.png";
import femaleWhiteRedHair0001 from "@/public/avatars/female-white-red-hair-0001.png";
import femaleWhiteRedHair003 from "@/public/avatars/female-white-red-hair-003.png";
import femaleWhiteBrownHair0003 from "@/public/avatars/female-white-brown-hair-0003.png";
import femaleWhiteBrownHair0004 from "@/public/avatars/female-white-brown-hair-0004.png";
import femaleWhiteBrownHair001 from "@/public/avatars/female-white-brown-hair-001.png";
import femaleWhiteBrunette0001 from "@/public/avatars/female-white-brunette-0001.png";
import femaleWhiteRedHair004 from "@/public/avatars/female-white-red-hair-004.png";
import femaleWhiteRedHair001 from "@/public/avatars/female-white-red-hair-001.png";
import femaleWhiteRedHair006 from "@/public/avatars/female-white-red-hair-006.png";
import femaleWhiteBlonde0001 from "@/public/avatars/female-white-blonde-0001.png";
import femaleWhiteBrunette0003 from "@/public/avatars/female-white-brunette-0003.png";
import femaleWhiteBrownHair0002 from "@/public/avatars/female-white-brown-hair-0002.png";
import femaleWhiteRedHair007 from "@/public/avatars/female-white-red-hair-007.png";
import femaleWhiteRedHair002 from "@/public/avatars/female-white-red-hair-002.png";

import * as L from "leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet.markercluster";

const recruiters = [
  {
    name: "Alice",
    avatar: femaleWhiteRedHair0001.src,
    cityState: "St Matthews, KY, United States",
    audio: "",
    skillSet:
      "20+ yrs Outside Sales - Enterprise, Cloud, Software, Contract Design",
    lat: 38.249880000000005,
    lng: -85.63574235919543,
  },
  {
    name: "Vicki",
    avatar: femaleWhiteBrownHair0001.src,
    cityState: "Morgantown, WV, United States",
    audio: "",
    skillSet:
      "20+ yrs Outside Sales-Risk Mgt, Fraud Prevention, eCommerce. Retail, Cybersecurity, Insurance, Utilities, Telecom, New/Emerging Mkts",
    lat: 39.6296809,
    lng: -79.9559437,
  },
  {
    name: "Jestine",
    avatar: femaleWhiteRedHair003.src,
    cityState: "Saint Cloud, Stearns County, Minnesota, USA",
    audio: "",
    skillSet:
      "20+ yrs Business Development, Supply Chain, Robotics, Technology Solutions, Financial, Enterprise",
    lat: 45.5616075,
    lng: -94.1642004,
  },
  {
    name: "Cindy",
    avatar: femaleWhiteBrownHair0003.src,
    cityState: "Pikeville, KY, United States",
    audio: "audio/audio_10.mp3",
    skillSet:
      "20+ Years Inside Sales, Outside Sales - Supply Chain, Robotics, Mobility, Omni-Channel Retail",
    lat: 37.4792672,
    lng: -82.5187629,
  },
  {
    name: "Kelly",
    avatar: femaleWhiteBrownHair0004.src,
    cityState: "Conifer, CO, United States",
    audio: "",
    skillSet:
      "Lead Mgt, Client Services Mgt, Business Development, Healthcare, Public Safety, Retail, SAP",
    lat: 39.5233424,
    lng: -105.305499,
  },
  {
    name: "Mary",
    avatar: femaleWhiteBrownHair001.src,
    cityState: "Simpsonville, SC, United States",
    audio: "audio/audio_17.mp3",
    skillSet:
      "30+ yrs Outside Sales - Supply Chain, Mobility and Healthcare",
    lat: 34.7370639,
    lng: -82.2542834,
  },
  {
    name: "Serena",
    avatar: femaleWhiteBrunette0001.src,
    cityState: "McKinney, TX, United States",
    audio: "audio/audio_42.mp3",
    skillSet:
      "21+ yrs Inside Sales and Business Development. Factory Automation, Supply Chain, Software, Hardware, and Consultative Services.",
    lat: 33.1976496,
    lng: -96.6154471,
  },
  {
    name: "Julie",
    avatar: femaleWhiteBrownHair0001.src,
    cityState: "Minneapolis, MN, United States",
    audio: "audio/audio_22.mp3",
    skillSet:
      "20+ yrs Inside Sales - Robotics, Barcoding, Retail, Mobility, Supply Chain, Marketing Solutions",
    lat: 44.9772995,
    lng: -93.2654692,
  },
  {
    name: "Nancy",
    avatar: femaleWhiteRedHair004.src,
    cityState: "Dumont, NJ, United States",
    audio: "",
    skillSet:
      "25+ Yrs Enterprise, Supply Chain, Material Handling, Factory Automation, C-Suite",
    lat: 40.9406541,
    lng: -73.9968051,
  },
  {
    name: "Joy",
    avatar: femaleWhiteRedHair001.src,
    cityState: "Safety Harbor, FL, United States",
    audio: "",
    skillSet:
      "25+ yrs B2B Enterprise Solution Sales, Healthcare, Supply Chain, Factory Automation, C-Suite",
    lat: 27.9908529,
    lng: -82.6931553,
  },
  {
    name: "Jen",
    avatar: femaleWhiteRedHair006.src,
    cityState: "Arlington Heights, Wheeling Township, Cook County, Illinois, United States",
    audio: "",
    skillSet:
      "25+ yrs in Sales focused on IT Consulting, Mgt Consulting/Advisory, Oracle ERP, SAP ERP SW and Svcs, Analytics, Financial Planning",
    lat: 42.0811563,
    lng: -87.9802164,
  },
  {
    name: "Catherine",
    avatar: femaleWhiteBlonde0001.src,
    cityState: "Las Vegas, Clark County, Nevada, United States",
    audio: "",
    skillSet:
      "22+ Years Outside Sales. Cyber Security, Enterprise, Encryptics, IT Security, Professional Services and Consulting",
    lat: 36.1672559,
    lng: -115.148516,
  },
  {
    name: "Jodie",
    avatar: femaleWhiteBrunette0003.src,
    cityState: "Birmingham, Jefferson County, Alabama, United States	",
    audio: "",
    skillSet:
      "20+ Years in Sales, Metals, Industrial, Healthcare, Major Accounts",
    lat: 33.5206824,
    lng: -86.8024326,
  },
  {
    name: "Lisa C",
    avatar: femaleWhiteBrownHair0002.src,
    cityState: "Orange, CA, United States",
    audio: "",
    skillSet:
      "23 +yrs Inside Sales - Robotics, ERP, Retail, Healthcare, SaaS, Supply Chain, Recruiting",
    lat: 33.7872568,
    lng: -117.850308,
  },
  {
    name: "Megan",
    avatar: femaleWhiteBrunette0003.src,
    cityState: "Palm Desert, Riverside County, California, United States of America",
    audio: "",
    skillSet:
      "25+ years, Outside Sales, Technical Sales, Supply Chain, Industrial Radios, Major Account Selling",
    lat: 33.7288179,
    lng: -116.382571,
  },
  {
    name: "Pattie",
    avatar: femaleWhiteRedHair004.src,
    cityState: "Morro Bay, San Luis Obispo County, California, 93442, USA",
    audio: "",
    skillSet:
      "30+ years Outside Sales. B2B, Supply Chain, Management, Asset Tracking, Software, Technology",
    lat: 35.3658075,
    lng: -120.849901,
  },
  {
    name: "Jennifer",
    avatar: femaleWhiteBrownHair0003.src,
    cityState: "Rancho Cucamonga, San Bernardino County, California, United States",
    audio: "",
    skillSet:
      "20+ years in Sales. Hospitality, Enterprise, SMB, Supply Chain, Project Mgt Solutions",
    lat: 34.1033192,
    lng: -117.5751735,
  },
  {
    name: "DeeDee",
    avatar: femaleWhiteRedHair001.src,
    cityState: "Chicago Avenue, Downtown Naperville, Naperville, DuPage County, Illinois, 60540, United States",
    audio: "",
    skillSet:
      "20+ yrs Outside Sales, Healthcare, Managed Services, Supply Chain, Enterprise Selling, C-Suite",
    lat: 41.771549,
    lng: -88.1472289,
  },
  {
    name: "Sue",
    avatar: femaleWhiteRedHair007.src,
    cityState: "Monticello, NY, United States",
    audio: "",
    skillSet:
      "Sales Operations, Web, Collaboration Software, Accounting, Call Lists, Special Projects",
    lat: 41.6804285,
    lng: -74.652518,
  },
  {
    name: "Christine",
    avatar: femaleWhiteBrownHair0004.src,
    cityState: "Pittsburgh, Allegheny County, Pennsylvania, United States",
    audio: "",
    skillSet:
      "20+ Yrs Sales & Biz Dev; B2B Sales, Communications, Supply Chain, Real Estate",
    lat: 40.4416941,
    lng: -79.9900861,
  },
  {
    name: "Jen",
    avatar: femaleWhiteRedHair002.src,
    cityState: "Orlando, Orange County, Florida, United States",
    audio: "",
    skillSet:
      "15+ Yrs Outside Sales; Enterprise, B2B, SaaS POS Systems, Supply Chain",
    lat: 28.5421109,
    lng: -81.3790304,
  },
  {
    name: "Theresa",
    avatar: femaleWhiteRedHair003.src,
    cityState: "Spokane, Spokane County, Washington, United States of America",
    audio: "",
    skillSet:
      "25+ yrs Outside & B2B Sales, Business Development, Supply Chain, Wireless 2-Way Communication Solutions, Industrial, Security, Video",
    lat: 47.6571934,
    lng: -117.42351,
  },
  {
    name: "Tracey",
    avatar: femaleWhiteBlonde0001.src,
    cityState: "Barrie, ON, Canada",
    audio: "",
    skillSet:
      "20+ Yrs Outside Sales, Supply Chain, Hospitality, Technology, High Value Business Solutions, Mining, Retail",
    lat: 44.3893113,
    lng: -79.6901736,
  },
];

const addressToCoords = async (address) => {
  const provider = new OpenStreetMapProvider();
  return await provider.search({ query: address });
};

export default function Map() {
  // console.log(addressToCoords("Barrie, ON, Canada"));
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
      const personIcon = L.icon({
        iconUrl: recruiter.avatar,
        iconSize: [50, 50],
        iconAnchor: [25, 25],
      });

      const marker = L.marker(L.latLng(recruiter.lat, recruiter.lng), {
        icon: personIcon,
        title: recruiter.name,
      });

      const popupContent = (
        <div>
          <div className="flex justify-start">
            <div className="w-40 pr-4 py-2">
              <img src={recruiter.avatar} alt={recruiter.name} />
            </div>
            <div className="font-sans">
              <div className="text-lg font-bold">{recruiter.name}</div>
              <div className="">{recruiter.skillSet}</div>
            </div>
          </div>
          {recruiter.audio && (
            <audio controls controlsList="nofullscreen nodownload noremoteplayback noplaybackrate foobar" className="mt-4">
              <source src={recruiter.audio} type="audio/mpeg" />
            </audio>
          )}
        </div>
      );

      marker.bindPopup(ReactDOMServer.renderToStaticMarkup(popupContent));
      markers.addLayer(marker);
    });

    map.addLayer(markers);
  }, []);

  return <div id="map" className="h-96 w-full"></div>;
}
