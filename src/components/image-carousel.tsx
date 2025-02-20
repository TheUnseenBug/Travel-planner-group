import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTrip } from "../helpers/trip";
import { Trip } from "../types/types";
import Button from "./button";
import { showNotification } from "../helpers/notif";

interface Props {
  trip: Trip;
}

const ImageCarousel: React.FC<Props> = ({ trip }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();

  // Use optional chaining and nullish coalescing operator to handle potential undefined values
  const images = trip?.images ?? [];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const confirmImage = () => {
    const newTrip = { ...trip }; // Create a copy of the current trip
    newTrip.images = trip.images ? [...trip.images] : []; // Create a copy of the images array

    // Set the 0 index image to the currentImageIndex
    if (newTrip.images) {
      newTrip.images[0] = images[currentImageIndex];
    }

    // Dispatch the updated trip
    dispatch(
      showNotification({
        visible: true,
        message: "Bilden vald!",
      })
    );
    dispatch(editTrip(newTrip));
  };

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="carousel relative">
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="w-full h-48 object-cover rounded-md"
      />
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100"
      >
        &lt;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100"
      >
        &gt;
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentImageIndex ? "bg-white" : "bg-gray-300"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>

      <div className="flex justify-end p-2">
        <Button text="Bekräfta" onClick={confirmImage} className="text-xs" />
      </div>
    </div>
  );
};

export default ImageCarousel;
