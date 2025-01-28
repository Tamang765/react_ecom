import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import {
  FilterByColor,
  FilterByPrice,
  FilterBySize,
} from "../components/filterbycolor/FilterByColor";

import { Grid3x3, LayoutGrid } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { filterMen } from "../redux/slice/filterSlice";
import { getProduct } from "../redux/slice/productSlice";

const colorData = [
  {
    id: 1,
    color: "Red",
  },
  { id: 2, color: "Blue" },
  { id: 3, color: "Black" },
  { id: 4, color: "Brown" },
  { id: 5, color: "Green" },
];

const Men = () => {
  const [limit, setLimit] = useState(20);

  const [selectedColor, setSelectedColor] = useState([]);

  const [size, setSize] = useState("");

  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 0,
  });

  const [filteredData, setFilteredData] = useState([]);

  const dispatch = useDispatch();
  const men = useSelector((state) => state.filter.men);

  const [gridCount, setGridCount] = useState(2);

  useEffect(() => {
    dispatch(filterMen());
  }, [dispatch]);

  useEffect(() => {
    let filtered = men;

    if (selectedColor?.length) {
      filtered = filtered?.filter((product) =>
        selectedColor.includes(product?.color)
      );
    }

    if (priceRange?.min) {
      filtered = filtered?.filter(
        (product) => +product?.price?.replace("$", "") > priceRange?.min
      );
    }

    if (priceRange?.max) {
      filtered = filtered?.filter(
        (product) => +product?.price.replace("$", "") < priceRange?.max
      );
    }

    if (size) {
      filtered = filtered?.filter(
        (product) => product?.size.toLowerCase() === size
      );
    }

    setFilteredData(filtered);
  }, [men, selectedColor, size, priceRange]);

  const category = useSelector((state) => state.category.category);


    const products = useSelector((state) => state.product.men);


    console.log(category)
    const menCategory =category?.length ? category?.find((item)=>item?.name.toLowerCase() ==="men")?._id:""

    useEffect(()=>{
      menCategory &&  dispatch(getProduct({category_id:menCategory,category_name: "men"}))
    },[dispatch, menCategory])


    console.log(selectedColor)
  return (
    <div className="min-h-screen">
      <div className="grid w-full grid-cols-1 gap-2 lg:grid-cols-4 md:grid-cols-2">
        <div className="flex flex-col col-span-1 gap-4 px-2 ">
          <FilterByColor
            colors={colorData}
            setSelectedColor={setSelectedColor}
          />

          <button
            className="p-2 text-white bg-red-300 cursor-pointer "
            onClick={() => setSelectedColor([])}
          >
            Reset Color
          </button>

          <FilterBySize setSize={setSize} size={size} />
          <button
            className="p-2 text-white bg-red-300 cursor-pointer "
            onClick={() => setSize("")}
          >
            Reset Size
          </button>
          <FilterByPrice setPriceRange={setPriceRange} />
        </div>
        <div className="col-span-3">
          <div className="flex gap-2">
            {selectedColor?.map((color) => (
              <div>{color}/</div>
            ))}
          </div>
          {/* <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2"> */}
          <div className="flex gap-4">
            <LayoutGrid onClick={() => setGridCount(2)} />
            <Grid3x3 onClick={() => setGridCount(3)} />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8cHBwdHR0dHRsHBwcAAADV1dXY2NgXFxUXFxcUFBLp6em8vLxTU1IEBACWlpZERENNTUsODg4+Pj4jIyHx8fH39/fAwMCLi4tGRkYNDQg1NTOYmJiurq5ycnIuLi5dXV3FnTvsAAADo0lEQVR4nO3d3VbaQBSGYTMJmkSQkIAQwo/3f5VNYg86/Qoz21UQ8H1Py0YfqeLBXtunJyIiIiK6r96fH6X3E8LnyaP0clKYPEbZGaFzzvBMbszysa8ycF6YlFl89fB8hWEg+/wEDBXDQG0YKEPCcrOexrbed4mrD/ED03VTuKKyDBxql3R7w+e0Kc8Lk2x94h//1WtVuMnOMPC0KFw5swzMM1e0K8PANAsJp4ZnG4Vzw8DXhNWrYeAuhe1dCcvUKHxL8/t6DRH+HUIJIUI/hBpCCaGEEKEfQg2hhFBCiNAPoYZQQighROiHUEMoIZQQIvRDqCGUEEoIEfoh1BBKFxBeeCfq24Wu3r/G99wULtsYBlZtnuaLlWFis03z5tkwsN+GdhO7qonP9QNHw0C1TNN0WRk6DgONYaBLA0KXFIbGZUrLQDqUG/rCQEh42dIrFBLWhnXqcSG2sCxgj6+I4fFv5TCxNUyUIWFx2M1j222O/cBH/MB81/XAzjLw0ROPG8PA4bs3aC//bvH28O/4CBF63aSQ37wReiHUEEoIJYQI/RBqCCWEEkKEfgg1hBJCCSFCP4QaQgmhhBChH0INoYRQQojQD6GGUEIoIfwJQsvW16q1bn3NrMJdLzTdTVyHdoSTZhFfOyzEdoaBWT+QLA0Di27YoLUMNMHty2HPtYzsc7819tFDw+MT60CaGwbyqA3aa+y5Xq7ga2j6eqW2L3CZDBOWAfOHCL6GSTWLb7EcFmINA7NlT1xaBrp8+D40DFQBofFnaZWnF96gtf8s/c+7ib3w1t4PESL0+gnCe/y9FOGfIdQQSgglhAj9EGoIJYQSQoR+CDWEEkIJIUI/hBpCCaGEEKEfQg2hhFBCiNAPoYZQQigh/AlC693E7NbuJoY2aItD/J3J+eftS8OA+fblfGa8fTk/FMH7pVl89Xi/1DCQjbuUb4Y+75eaBrhBa7kKfIt3hMMbtF0bfXa5bZbDLejWMDHego5//O9b0IbHt6Fb0Em9N1zbvtI978pwz3sVuuf9AFd2ecdH6IVQQyghlBAi9EOoIZQQSggR+iHUEEoIJYQI/RBqCCWEEkKEfgg1hBJCCSFCP4QaQgmhhBChH0INoXQDG7RX2Iky3U0MbtCWm2l8+y5x9cEwsG7y/iVZGyYOZZp3e8PAJvDX450rL75Bm1o2aMf1y63hI5TJ927QXqXz34cP0Rmh5T/c7TaZnBK+vzxK7yeERERERHSr/QIvglm9N8GDSgAAAABJRU5ErkJggg=="
              alt=""
              width={30}
              className="h-6"
              height={15}
              onClick={() => setGridCount(4)}
            />
          </div>

          <div
            className={`grid  gap-4`}
            style={{
              gridTemplateColumns: `repeat(${gridCount}, minmax(0, 1fr))`,
            }}
          >
            {/* {products.map((product, index) => {
            return <Card key={index} {...product} />;
          })} */}
            {selectedColor?.length || size ? (
              !filteredData?.length ? (
                <p className="text-center">
                  Showing {filteredData?.length} out of {men?.length} products
                </p>
              ) : (
                filteredData?.map((product, index) => (
                  <Card key={index} {...product} />
                ))
              )
            ) : (
              men
                ?.slice(0, limit)
                ?.map((product, index) => <Card key={index} {...product} />)
            )}
          </div>
        </div>
        <br />
        {/* <button className="border-4" onClick={() => setLimit(limit + 20)}>
          Load More
        </button> */}
      </div>
    </div>
  );
};

export default Men;
