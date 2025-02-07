import "leaflet/dist/leaflet.css";
import { FC, useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface Location {
  lat: number;
  lng: number;
  name: string;
}

interface MapContentProps {
  city: string;
}

const MapContent: FC<MapContentProps> = ({ city }) => {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`
        );
        const data = await response.json();

        if (data && data.length > 0) {
          setLocation({
            lat: parseFloat(data[0].lat),
            lng: parseFloat(data[0].lon),
            name: data[0].display_name,
          });
        } else {
          console.error("Location not found!");
        }
      } catch (error) {
        console.error("Error searching location:", error);
      }
    };

    fetchLocation();
  }, [city]);

  if (!location) return <div>Loading map...</div>;

  return (
    <div
      className="map"
      style={{
        height: "400px",
        width: "400px",
        position: "absolute",
        top: "100px",
        left: "35%",
      }}
    >
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
        key={`${location.lat}-${location.lng}`}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.lat, location.lng]}>
          <Popup>{location.name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapContent;
