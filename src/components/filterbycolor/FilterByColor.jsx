export const FilterByColor = ({ colors, setSelectedColor }) => {
  return (
    <div>
      <h2 className="text-lg  font-semibold mb-3">Filter By Color</h2>

      {colors?.map((item) => (
        <div
          className=" flex items-center gap-2 pb-2 border-2 "
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
            className="w-6 aspect-square rounded-full shadow-xl"
            style={{
              backgroundColor: item?.color,
            }}
          />
          <h3>{item?.color}</h3>
        </div>
      ))}
    </div>
  );
};

export const FilterBySize = () => {
  const sizes = ["xxl", "xl", "l", "m", "s", "xs"];
  return (
    <div>
      <h2 className="text-lg  font-semibold mb-3">Filter By Size</h2>

      {sizes?.map((item) => (
        <div className=" flex items-center gap-2 pb-2" key={item}>
          <input
            type="radio"
            name="size"
            id={item}
            className="w-4  aspect-square"
          />
          <h3>{item}</h3>
        </div>
      ))}
    </div>
  );
};

export const FilterByPrice = () => (
  <div>
    <h2 className="text-lg  font-semibold mb-3">Filter By Price</h2>
    <div className="flex gap-2 items-center ">
      <input
        type="number"
        className="w-full border-2  px-1"
        name="min"
        placeholder="min"
      />
      -
      <input
        type="number"
        className="w-full border-2  px-1"
        name="max"
        placeholder="max"
      />
      <button>Filter</button>
    </div>
  </div>
);
