import React, { useState, useEffect, ReactNode } from "react";
import imageOne from "../assets/beach-trip.jpg";
import imageTwo from "../assets/hike-trip.jpg";
import imageFour from "../assets/ski-trip.jpg";

interface RotatingBackgroundProps {
  children: ReactNode;
}

const RotatingBackground: React.FC<RotatingBackgroundProps> = ({
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [`url(${imageOne})`, `url(${imageTwo})`, `url(${imageFour})`];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds
    console.log(currentIndex);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [currentIndex, images.length]); // Depend on currentIndex

  return (
    <div className="backgroundContainer">
      <div
        className="backgroundImg"
        style={{ backgroundImage: images[currentIndex] }}
      ></div>
      {children}
    </div>
  );
};

export default RotatingBackground;
