import { useState } from 'react';

const colors = [
  { name: 'Black', class: 'bg-black' },
  { name: 'Gray', class: 'bg-gray-400' },
  { name: 'Orange', class: 'bg-orange-400' },
  { name: 'Red', class: 'bg-red-400' },
];

export default function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState(colors[0].name);

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800">Choose a Color</h3>
      <div className="flex flex-wrap gap-4 mt-4">
        {colors.map((color) => (
          <button
            key={color.name}
            type="button"
            className={`w-10 h-10 ${color.class} border rounded-md shrink-0 ${
              selectedColor === color.name ? 'border-gray-800' : 'border-white hover:border-gray-800'
            }`}
            onClick={() => setSelectedColor(color.name)}
          ></button>
        ))}
      </div>
    </div>
  );
}

