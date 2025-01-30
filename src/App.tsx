import { Input } from "@headlessui/react"
import Card from "./commponet/Card"
import { productslist } from "./commponet/data"
import { fromInputList } from "./commponet/data"
import Model from "./commponet/ui/Model"

import { useState } from "react"
import { Iproduct } from "./interfaces/interface"
const App = () => {
/**---------state---------- */
const [product , setproduct] = useState <Iproduct>({
  title : '' ,
  desc : '',
  imageurl : ''    ,
  price :'' ,
  colors : [] ,
  category  : {
    name : '' ,
    imageurl : '' 
  }
})
const [isOpen, setIsOpen] = useState(false)

const open=()=>  setIsOpen(true)
const closeModel=()=>  setIsOpen(false)
const onchangehandelr=(e : React.ChangeEvent<HTMLInputElement>)=> {
    const [value , name ] = e.target;
    setproduct({
      ...product , 
      [name] : value 
    })
}
/*handeler*/ 
  const productrender = productslist.map(product=><Card key={product.id} product={product}   />)
  const renderInput = fromInputList.map (input => <div className="flex flex-col">
    <label htmlFor={input.id}>{input.label}</label>
    <Input type="text" id={input.id} name={input.name}  className='border border-gray-500'   value={''} onChange={onchangehandelr}   />

  </div>)
  return (
    <main className="container mx-auto px-4">
      <button className="w-full mt-2 p-2 bg-indigo-600 rounded-full cursor-pointer " onClick={open} >Add</button>
   <div className=" grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 m-4 gap-2 space-x-2 rounded-md p-2 ">
    {productrender}
    </div>
    
<Model isOpen={isOpen}  close={closeModel} title="Add a new product">
  {renderInput}
  <div className="flex justify-center items-center mt-5">
  <button className="bg-indigo-600 w-full" >submit</button>
  <button className="bg-gray-700-800 hover:bg-slate-500 w-full">cancel</button>
  </div>

</Model>
   </main>

  )
}

export default App 
