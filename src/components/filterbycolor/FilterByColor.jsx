const FilterByColor = ({ colors }) => {
  console.log(colors);
  return (
    <>
      {colors?.map((item) => (
        <div className=" flex items-center gap-2 pb-2" key={item?.id}>
          <div
            className="w-6 aspect-square rounded-full shadow-xl"
            style={{
              backgroundColor: item?.color,
            }}
          />
          <h3>{item?.color}</h3>
        </div>
      ))}
    </>
  );
};

export default FilterByColor;
