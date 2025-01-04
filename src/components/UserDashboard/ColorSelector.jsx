import React, { useState } from 'react';

const ColorSelector = ({ setSelectedColor }) => {
  const [selectedColorLocal, setSelectedColorLocal] = useState('Black');
  
  const colors = [
    { name: 'Black', class: 'bg-black' },
    { name: 'White', class: 'bg-white border-2 border-gray-200' },
    { name: 'Navy', class: 'bg-blue-900' },
    { name: 'Red', class: 'bg-red-500' },
    { name: 'Green', class: 'bg-green-500' },
    { name: 'Yellow', class: 'bg-yellow-400' },
  ];

  const handleColorSelect = (color) => {
    setSelectedColorLocal(color.name);
    setSelectedColor(color.name);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800">Choose a Color</h3>
        <span className="text-sm text-gray-500">Selected: {selectedColorLocal}</span>
      </div>
      <div className="flex flex-wrap gap-3 mt-4">
        {colors.map((color) => (
          <button
            key={color.name}
            type="button"
            className={`w-8 h-8 rounded-full ${color.class} flex items-center justify-center transition-all duration-200 ${
              selectedColorLocal === color.name 
                ? 'ring-2 ring-offset-2 ring-blue-900 scale-110' 
                : 'hover:scale-110'
            }`}
            onClick={() => handleColorSelect(color)}
            title={color.name}
          >
            {selectedColorLocal === color.name && (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 ${color.name === 'White' ? 'text-gray-800' : 'text-white'}`} 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
