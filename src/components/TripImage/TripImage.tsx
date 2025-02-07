import React, { useState, useEffect } from "react";

interface TripImageProps {
  city: string;
}

const TripImage: React.FC<TripImageProps> = ({ city }) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Ersätt med din Unsplash Access Key

  const accessKey = import.meta.env.VITE_IMG_API_KEY;

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      setError(null);
      try {
        // Bygg URL:en för att söka på den angivna staden
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${city}&client_id=${accessKey}`
        );

        if (!response.ok) {
          throw new Error("Kunde inte hämta bild från Unsplash");
        }

        const data = await response.json();

        if (data.results && data.results.length > 0) {
          // Exempel: Vi väljer den första bilden från sökresultatet
          setImageUrl(data.results[0].urls.small);
        } else {
          setError("Ingen bild hittades");
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchImage();
    }
  }, [city, accessKey]);

  if (loading) return <p>Laddar bild...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <img src={imageUrl} alt={`Bild på ${city}`} className="w-full h-auto" />
  );
};

export default TripImage;
