import React, { useState, useRef } from 'react';

const ImageZoom = ({ image, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  return (
    <div className="relative w-full h-full">
      <div
        ref={containerRef}
        className="relative w-full h-full overflow-hidden cursor-zoom-in"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Original Image */}
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
        />

        {/* Zoomed Image */}
        {isZoomed && (
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: `${position.x}% ${position.y}%`,
              backgroundSize: '200%',
              backgroundRepeat: 'no-repeat',
              zIndex: 1,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ImageZoom;
