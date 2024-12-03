import "./App.css";
import { products } from "./assets/Data";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-root_img">
      <div className="max-w-7xl mx-auto ">
        <Navbar />
        <Banner />

        <div className="my-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold">New Arrivals</h1>
            <button className="text-sky-400 border-2 bg-primary border-sky-400 px-4">
              See All
            </button>
          </div>
          <hr className="h-1  bg-black" />
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
            {/* {products.map((product, index) => {
            return <Card key={index} {...product} />;
          })} */}
            {products.splice(0, 4).map((product, index) => (
              <Card key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
