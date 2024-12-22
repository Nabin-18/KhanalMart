import { ImCross } from "react-icons/im";
import Button from "../component/Button";

const AddToCart = () => {


  return (
    <div className="shadow-xl  ">
      <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] gap-4 justify-between w-[80%] m-auto mt-6 font-semibold">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="m-auto w-[80%] divide-red-600  mt-6  " />
      <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] gap-2 justify-between w-[80%] m-auto items-center mt-4">
        <div>
          <img
            src="./FoodImage/apple.jpg"
            className="h-[80px] w-[80px] border rounded-md"
          />
        </div>
        <div>
          <h1>Apple</h1>
        </div>
        <div>
          <p>NRS 100</p>
        </div>
        <div>
          <p>2 piece</p>
        </div>
        <div>
          <p>NRS 200</p>
        </div>
        <div className="mx-9">
          <ImCross className="text-green-500 hover:text-red-500 cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] gap-2 justify-between w-[80%] m-auto items-center mt-4">
        <div>
          <img
            src="./FoodImage/apple.jpg"
            className="h-[80px] w-[80px] border rounded-md"
          />
        </div>
        <div>
          <h1>Apple</h1>
        </div>
        <div>
          <p>NRS 100</p>
        </div>
        <div>
          <p>2 piece</p>
        </div>
        <div>
          <p>NRS 200</p>
        </div>
        <div className="mx-9">
          <ImCross  className="text-green-500 hover:text-red-600 cursor-pointer" />
        </div>
      </div>
      <hr />
      <div className="w-[90%] m-auto bg-gray-200  p-2 flex flex-col items-center gap-2 lg:w-[30%]">
        <h1 className="text-xl font-semibold text-center p-3 ">
          Cart total
        </h1>
        <p className="text-xl font-semibold">Subtotal : NRS 1234</p>
        
        <p className="text-xl font-semibold">Shipping fee : free</p>
        
        <p className="text-xl font-semibold">Total : NRS 1234</p>
        <Button text="Pay Now" className="mt-3" />
      </div>
    </div>
  );
};

export default AddToCart;
