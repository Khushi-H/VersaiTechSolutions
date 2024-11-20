import { useState, useEffect } from "react";

const sliders = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1731352606444-4683b76a4f7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D/200x200",
    text: "A close up of tree with red leaves",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1731271140119-34ad9551ff10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D/200x200/",
    text: "A river running throgh a forest filled with tress",
  },
  {
    id: 3,
    image: "https://plus.unsplash.com/premium_photo-1728901302537-9e9878dd8ef1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D/200x200/",
    text: "A flock of white swans swimming in a lake",
  },
  {
    id: 4,
    image: "https://plus.unsplash.com/premium_photo-1729636736191-7430f4b24856?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D/200x200/",
    text: "An aerial view of winding road in the mountains",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1594886801338-b81548345f77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfEZrV1hHNVRSMjA0fHxlbnwwfHx8fHw%3D/200x200/",
    text: "City skyline during night time",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slider Features :-

  // Automatic change slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliders.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-charcoalGray">

      {/*Image Sliders */}
      {sliders.map((slider, index) => (
        <div
          key={slider.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slider.image}
            alt={slider.text}
            className="w-full h-full object-cover object-center"
            
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-goldenYellow text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-center fade-effect">
              {slider.text}
            </h2>
          </div>
        </div>
      ))}

      {/* Hollow Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliders.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full border-2 ${
              index === currentIndex
                ? "bg-turquoiseBlue border-turquoiseBlue"
                : "bg-transparent border-ivoryWhite"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
