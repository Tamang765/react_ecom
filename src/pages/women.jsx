import { Grid, Grid3x3, LayoutGrid } from "lucide-react"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Card from "../components/Card"
import { FilterByColor, FilterByPrice, FilterBySize } from "../components/filterbycolor/FilterByColor"
import { getProduct } from "../redux/slice/productSlice"

const colorData = [
  { id: 1, color: "red" },
  { id: 2, color: "blue" },
  { id: 3, color: "black" },
  { id: 4, color: "brown" },
  { id: 5, color: "green" },
]

const Women = () => {
  const [limit, setLimit] = useState(20)
  const category = useSelector((state) => state.category.category)
  const women = useSelector((state) => state.product.women)
  const [selectedColor, setSelectedColor] = useState([])
  const [size, setSize] = useState("")
  const [priceRange, setPriceRange] = useState({
    minPrice: 0,
    maxPrice: 0,
  })
  const dispatch = useDispatch()
  const [gridCount, setGridCount] = useState(2)

  const womenCategory = category?.length ? category?.find((item) => item?.name.toLowerCase() === "women")?._id : ""

  useEffect(() => {
    womenCategory &&
      dispatch(
        getProduct({
          category_id: womenCategory,
          category_name: "women",
          color: selectedColor,
          size,
          priceRange,
        }),
      )
  }, [dispatch, womenCategory, selectedColor, size, priceRange])

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="grid gap-6 lg:grid-cols-4">
        <div className="space-y-6 lg:col-span-1">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Filters</h2>
            <FilterByColor colors={colorData} setSelectedColor={setSelectedColor} />
            <button
              className="w-full px-4 py-2 mt-4 text-white transition duration-300 bg-red-500 rounded hover:bg-red-600"
              onClick={() => setSelectedColor([])}
            >
              Reset Color
            </button>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <FilterBySize setSize={setSize} size={size} />
            <button
              className="w-full px-4 py-2 mt-4 text-white transition duration-300 bg-red-500 rounded hover:bg-red-600"
              onClick={() => setSize("")}
            >
              Reset Size
            </button>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <FilterByPrice setPriceRange={setPriceRange} />
          </div>
        </div>

        <div className="space-y-6 lg:col-span-3">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                {selectedColor?.map((color) => (
                  <span key={color} className="px-3 py-1 text-sm text-gray-800 bg-gray-200 rounded-full">
                    {color}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setGridCount(2)}
                  className={`p-2 rounded ${gridCount === 2 ? "bg-gray-200" : "hover:bg-gray-100"}`}
                >
                  <LayoutGrid size={20} />
                </button>
                <button
                  onClick={() => setGridCount(3)}
                  className={`p-2 rounded ${gridCount === 3 ? "bg-gray-200" : "hover:bg-gray-100"}`}
                >
                  <Grid3x3 size={20} />
                </button>
                <button
                  onClick={() => setGridCount(4)}
                  className={`p-2 rounded ${gridCount === 4 ? "bg-gray-200" : "hover:bg-gray-100"}`}
                >
                  <Grid size={20} />
                </button>
              </div>
            </div>

            <div
              className={`grid gap-6`}
              style={{
                gridTemplateColumns: `repeat(${gridCount}, minmax(0, 1fr))`,
              }}
            >
              {women?.slice(0, limit)?.map((product, index) => (
                <Card key={index} {...product} />
              ))}
            </div>
          </div>

          {/* <div className="flex justify-center">
            <button
              className="px-6 py-3 text-white transition duration-300 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
              onClick={() => setLimit(limit + 20)}
            >
              Load More
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Women
