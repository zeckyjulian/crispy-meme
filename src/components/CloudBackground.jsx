import { useEffect, useState } from "react";
import cloud1 from "../assets/clouds/cloud1.png";
import cloud2 from "../assets/clouds/cloud2.png";
import cloud3 from "../assets/clouds/cloud3.png";
import cloud4 from "../assets/clouds/cloud4.png";

const cloudImages = [cloud1, cloud2, cloud3, cloud4];

export const CloudBackground = () => {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    generateClouds();
    const handleResize = () => generateClouds();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateClouds = () => {
    const numberOfClouds = Math.floor(window.innerWidth / 300);
    const newClouds = [];

    for (let i = 0; i < numberOfClouds; i++) {
      newClouds.push({
        id: i,
        img: cloudImages[Math.floor(Math.random() * cloudImages.length)],
        size: Math.random() * 120 + 80,
        x: Math.random() * 100,
        y: Math.random() * 80,
        speed: Math.random() * 40 + 50,
      });
    }
    setClouds(newClouds);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-sky-200 to-white">
      {/* Matahari */}
      <div className="absolute top-10 right-10 w-28 h-28 rounded-full bg-yellow-300 shadow-[0_0_60px_rgba(253,224,71,0.8)]" />

      {/* Clouds */}
      {clouds.map((cloud) => (
        <img
          key={cloud.id}
          src={cloud.img}
          alt="cloud"
          className="absolute animate-moveCloud"
          style={{
            width: cloud.size + "px",
            top: cloud.y + "%",
            left: cloud.x + "%",
            animationDuration: cloud.speed + "s",
          }}
        />
      ))}
    </div>
  );
};
