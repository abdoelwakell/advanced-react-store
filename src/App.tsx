import { Input } from "@headlessui/react";
import Card from "./commponet/Card";
import { productsList } from "./commponet/data";
import { colors } from "./commponet/data";
import { formInputList } from "./commponet/data";
import Model from "./commponet/ui/Model";
import { useState } from "react";
import { Iproduct } from "./interfaces/interface";
import { IoMdClose } from "react-icons/io";
import { productvalidation } from "./validation";
import Error from './commponet/Error';
import Circlecolor from "./commponet/ui/Circlecolor";

const App = () => {
  const defaultObject: Iproduct = {
    title: '',
    desc: '',
    imageurl: '',
    price: '',
    colors: [],
    category: {
      name: '',
      imageurl: ''
    }
  };

  const [Products, setProducts] = useState<Iproduct[]>(productsList);
  const [product, setProduct] = useState<Iproduct>(defaultObject);
  const [errors, setErrors] = useState({
    title: '',
    desc: '',
    imageurl: '',
    price: ''
  });
  const [isOpen, setIsOpen] = useState(false);
  const [TempColor, SetTempColor] = useState<string[]>([]);

  const open = () => setIsOpen(true);
  const closeModel = () => setIsOpen(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
    setErrors({ ...errors, [name]: '' });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, desc, imageurl, price } = product;
    const validationErrors = productvalidation({ title, desc, imageurl, price });
    setErrors(validationErrors);

    const HaserrorMessage = Object.values(validationErrors).some(value => value !== '');
    if (HaserrorMessage) return;

    setProducts(prev => [...prev, product]);
    setProduct(defaultObject);
    SetTempColor([]);
    closeModel();
  };

  const cancelOn = () => {
    setProduct(defaultObject);
    closeModel();
  };

  const colorsRender = colors.map(color => (
    <Circlecolor
      key={color}
      color={color}
      onClick={() => {
        if (TempColor.includes(color)) {
          SetTempColor(prev => prev.filter(item => item !== color));
          return;
        }
        SetTempColor(prev => [...prev, color]);
      }}
    />
  ));

  const productRender = Products.map(Products => <Card key={Products.id} product={Products} />);
  const renderInput = formInputList.map(input => (
    <div className="flex flex-col space-y-1" key={input.id}>
      <label htmlFor={input.id} className="font-semibold text-gray-700">{input.label}</label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        onChange={onChangeHandler}
      />
      <Error Msg={errors[input.name]} />
    </div>
  ));

  return (
    <main className="container mx-auto px-4 py-6">
      <button
        className="w-full mt-4 p-3 bg-indigo-600 rounded-md text-white font-semibold hover:bg-indigo-700 transition-all"
        onClick={open}
      >
        Add Product
      </button>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {productRender}
      </div>

      <Model
        isOpen={isOpen}
        close={closeModel}
        title={
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold text-gray-800">Add a New Product</p>
            <IoMdClose
              onClick={cancelOn}
              size={20}
              className="cursor-pointer text-white bg-indigo-600 rounded-full p-1 hover:bg-indigo-700"
            />
          </div>
        }
      >
        <form className="space-y-4" onSubmit={submitHandler}>
          {renderInput}

          <div className="flex space-x-4 justify-center flex-wrap">
            {colorsRender}
          </div>

          <div className="flex space-x-2 justify-center flex-wrap mt-3">
            {TempColor.map(color => (
              <span
                key={color}
                style={{ backgroundColor: color }}
                className="p-1 mr-2 text-xs rounded-md text-white"
              >
                {color}
              </span>
            ))}
          </div>

          <div className="flex flex-col mt-6 space-x-4">
            <button
              type="submit"
              className="bg-indigo-600 w-full rounded-md text-white p-3 font-semibold hover:bg-indigo-700 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </Model>
    </main>
  );
};

export default App;
