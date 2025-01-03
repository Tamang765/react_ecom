import { useState } from 'react';

const sizes = ['SM', 'MD', 'LG', 'XL'];

export default function SizeSelector() {
  const [selectedSize, setSelectedSize] = useState('MD');

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800">Choose a Size</h3>
      <div className="flex flex-wrap gap-4 mt-4">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            className={`w-10 h-10 border font-semibold text-sm rounded-md flex items-center justify-center shrink-0 ${
              selectedSize === size ? 'border-gray-800' : 'hover:border-gray-800'
            }`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

