import { FaStar } from "react-icons/fa";
import { useState } from "react";
import Button from "./Button";
import { useParams, Link } from "react-router-dom";
import allProducts from "../assets/allProduct";
import { useContext } from "react";
import Context from "../context/Context";

const ProductDisplay = () => {
  const { addToCart } = useContext(Context);
  const { id } = useParams();

  // Find the product based on ID
  const productData = allProducts.find(
    (item) => item.id === Number.parseInt(id)
  );

  // If the product is not found, handle the error
  if (!productData) {
    return <div>Product not found</div>;
  }

  console.log(productData);
  console.log(productData.id);

  const [counter, setCounter] = useState(1); // Start with 1 item by default
  const [zoomed, setZoomed] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({ top: "0%", left: "0%" });

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleMouseEnter = () => {
    setZoomed(true);
  };

  const handleMouseLeave = () => {
    setZoomed(false);
  };

  const handleMouseMove = (e) => {
    const img = e.target;
    const { left, top, width, height } = img.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    setZoomStyle({
      left: `${xPercent}%`,
      top: `${yPercent}%`,
    });
  };

  return (
    <div className="flex shadow-md h-fit w-[80%] m-auto my-4 border justify-between flex-col md:flex-col lg:flex-row ">
      {/* Left Section */}
      <div
        className="w-[100%] flex flex-col item-center p-8 gap-4 border relative lg:w-[50%]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div className="mt-4 relative">
          <img
            src={productData.image}
            className="cursor-pointer h-[300px] w-[300px] border"
            alt={productData.title}
          />
        </div>
        {zoomed && (
          <div
            className="absolute top-0 right-[-650px] border-2 shadow-md bg-white overflow-hidden"
            style={{
              height: "500px",
              width: "500px",
              backgroundImage: `url(${productData.image})`,
              backgroundSize: "200%",
              backgroundPosition: `${zoomStyle.left} ${zoomStyle.top}`,
            }}
          />
        )}
        <hr />
        <div className="flex gap-2 items-center p-2 m-auto ">
          {new Array(4).fill(null).map((_, index) => (
            <img
              key={index}
              src={productData.image}
              className="h-20 w-20 cursor-pointer border"
              alt={`Thumbnail ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full flex flex-col p-4 items-center gap-4 h-fit">
        <div className="text-center m-4">
          <h1 className="text-2xl font-semibold">{productData.title}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <h1 className="text-xl font-semibold">Ratings :</h1>
          <p className="flex gap-3">
            {new Array(5).fill(null).map((_, index) => (
              <FaStar
                key={index}
                className="text-xl text-orange-400 cursor-pointer"
              />
            ))}
          </p>
        </div>
        <div>
          <p className="text-xl font-semibold">
            Category: {productData.category}
          </p>
        </div>
        <div>
          <p className="text-orange-500 font-semibold">
            NRS {productData.price}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-semibold">Quantity:</span>
          <button
            onClick={decrement}
            className="border p-2 w-[60px] text-xl font-semibold rounded-md"
          >
            -
          </button>
          <span className="text-xl font-semibold">{counter}</span>
          <button
            onClick={increment}
            className="border p-2 w-[60px] text-xl font-semibold rounded-md"
          >
            +
          </button>
          <p>In stock: 20</p>
        </div>
        <div className="flex gap-4 mt-4">
          <Link to="/addtocart">
            <Button
              onClick={() => {
                addToCart(productData, counter); // Pass productData and the quantity (counter)
              }}
              text="Add to Cart"
            />
          </Link>
        </div>
        <div className="text-center mt-4">
          <h1 className="text-xl font-semibold">Description :</h1>
          <p className="p-3">{productData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
