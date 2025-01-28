export const FilterByColor = ({ colors, setSelectedColor }) => {
  return (
    <div>
      <h2 className="mb-3 text-lg font-semibold">Filter By Color</h2>

      {colors?.map((item) => (
        <div
          className="flex items-center gap-2 pb-2 cursor-pointer"
          key={item?.id}
          onClick={() =>
            setSelectedColor((prev) =>
              prev.includes(item?.color)
                ? prev?.filter((color) => color !== item?.color)
                : [...prev, item?.color]
            )
          }
        >
          <div
            className="w-6 rounded-full shadow-xl aspect-square"
            style={{
              backgroundColor: item?.color,
            }}
          />
          <h3 className="capitalize">{item?.color}</h3>
        </div>
      ))}
    </div>
  );
};

export const FilterBySize = ({ setSize, size }) => {
  const sizes = ["xxl", "xl", "l", "m", "s", "xs"];

  return (
    <div>
      <h2 className="mb-3 text-lg font-semibold">Filter By Size</h2>

      {sizes?.map((item) => (
        <div className="flex items-center gap-2 pb-2 " key={item}>
          <input
            type="radio"
            name="size"
            id={size}
            value={size}
            onClick={() => setSize(item)}
            className="w-4 aspect-square"
          />
          <h3>{item}</h3>
        </div>
      ))}
    </div>
  );
};

export const FilterByPrice = ({ setPriceRange }) => {
  return (
    <div>
      <h2 className="mb-3 text-lg font-semibold">Filter By Price</h2>
      <div className="flex items-center gap-2 ">
        <input
          type="number"
          className="w-full px-1 border-2"
          name="min"
          placeholder="min"
          onChange={(e) =>
            setPriceRange((prev) => ({ ...prev, minPrice: e.target.value }))
          }
        />
        -
        <input
          type="number"
          className="w-full px-1 border-2"
          name="max"
          placeholder="max"
          onChange={(e) =>
            setPriceRange((prev) => ({ ...prev, maxPrice: e.target.value }))
          }
        />
        <button>Filter</button>
      </div>
    </div>
  );
};
