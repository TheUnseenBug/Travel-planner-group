import "leaflet/dist/leaflet.css";
import { FC, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface Location {
  lat: number;
  lng: number;
  name: string;
}

const MapContent: FC = () => {
  const [location, setLocation] = useState<Location>({
    lat: 51.505,
    lng: -0.09,
    name: "Default Location",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchLocation = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          searchTerm
        )}`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        setLocation({
          lat: parseFloat(data[0].lat),
          lng: parseFloat(data[0].lon),
          name: data[0].display_name,
        });
      } else {
        alert("Location not found!");
      }
    } catch (error) {
      console.error("Error searching location:", error);
      alert("Error searching location");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* BARA MOCK, TA BORT SEN  */}
      <form
        onSubmit={searchLocation}
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search any location..."
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "300px",
          }}
        />
        <button
          type="submit"
          disabled={isLoading}
          style={{
            padding: "8px 16px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* SLUT PÅ MOCK, TA BORT SEN  */}

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
    </div>
  );
};

export default MapContent;
