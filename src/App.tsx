import { Input } from "@headlessui/react"
import Card from "./commponet/Card"
import { productsList } from "./commponet/data"
import { colors } from "./commponet/data"
import { formInputList } from "./commponet/data"
import Model from "./commponet/ui/Model"
import { useState } from "react"
import { Iproduct } from "./interfaces/interface"
import { IoMdClose } from "react-icons/io";
import { productvalidation } from "./validation"
import Error from './commponet/Error'
import Circlecolor from "./commponet/ui/Circlecolor"
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

  const [product, setProduct] = useState<Iproduct>(defaultObject);
  const [errors , seterrors] = useState({ title: '',
    desc: '',
    imageurl: '',
    price: ''})
  //  console.log(errors)
  const [isOpen, setIsOpen] = useState(false);

      const [TempColor , SetTempColor] = useState<string[]>([])
      console.log(TempColor)

  const open = () => setIsOpen(true);
  const closeModel = () => setIsOpen(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
    seterrors({...errors, [name] : ''})
  };

//const btn_Submit = document.getElementById('btn-Submit') as HTMLButtonElement;
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
 
    event.preventDefault();
    const {title,desc,imageurl,price} = product;
    {/**  DEStructing  */}
    const errors = productvalidation({title  , desc , imageurl , price })
    setProduct(defaultObject); 
    console.log(errors)
    // check if any proppety has a value && check of all properties have a value ''
    const HaserrorMessage = Object.values (errors).some(value => value==='') && Object.values (errors).every(value => value==='')
      console.log(HaserrorMessage);
      if(!HaserrorMessage) {
        seterrors(errors)
        return
      }
      console.log('send data to server');
      
  };

  const cancelOn = () => {
    setProduct(defaultObject);
    closeModel();
  };
  const colorsRender=colors.map(color=><Circlecolor key={color} color= {color} onClick={()=> {
    if (TempColor.includes(color)) {
      SetTempColor(prev=>prev.filter(item => item !== color))
      return
    }
 SetTempColor((prev)=>[...prev, color]) 
  }} />)
  const productRender = productsList.map(product => <Card key={product.id} product={product} />);
  const renderInput = formInputList.map(input => (
    <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.id}>{input.label}</label>
      <Input type="text" id={input.id} name={input.name} value={product[input.name]} className='border border-gray-500' onChange={onChangeHandler} />
      <Error Msg={errors[input.name]}/>
    </div>
  ));

  return (
    <main className="container mx-auto px-4">
      <button className="w-full mt-2 p-2 bg-indigo-600 rounded-full cursor-pointer" onClick={open}>Add</button>
      <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 m-4 gap-2 space-x-2 rounded-md p-2">
        {productRender}
      </div>

      <Model isOpen={isOpen} close={closeModel} title={<div className="flex justify-between items-center">


        <p>Add a new product</p>
        <IoMdClose onClick={cancelOn} size={20} className="cursor-pointer text-indigo-900 bg-gray-400 rounded-md "/>
      </div>}   >
        <form className='space-y-3'  onSubmit={submitHandler}>
          {renderInput}
          <div className="flex my-5 space-x-2 justify-center  flex-wrap">
          {colorsRender }
          </div>

          <div className="flex my-5 space-x-2 justify-center  flex-wrap">
           {TempColor.map(color=> <span key={color}   style={{backgroundColor:color}} className= "p-1 mr-1 text-xs rounded-md text-white">{color}</span>)}
          </div>
          
          <div className="flex flex-col mt-5 space-x-4 " >
            <button type="submit" className="bg-indigo-600 w-full rounded-md text-white p-2"  id="btn-Submit" >Submit</button>
          </div>
        </form>
      </Model>
    </main>
  );
};

export default App;
