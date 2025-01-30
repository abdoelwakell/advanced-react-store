import Card from "./commponet/Card"
import { productslist } from "./commponet/data"
import Model from "./commponet/ui/Model"
import { useState } from "react"
const App = () => {
/**---------state---------- */
const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
 }
/*handeler*/ 
function closeModel() {
setIsOpen(false)
}
  const productrender = productslist.map(product=><Card key={product.id} product={product}   />)
  return (
    <main className="container mx-auto px-4">
      <button className="w-full mt-2 p-2 bg-indigo-600 rounded-full cursor-pointer " onClick={open} >Add</button>
   <div className=" grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 m-4 gap-2 space-x-2 rounded-md p-2 ">
    {productrender}
    </div>
    
<Model isOpen={isOpen}  close={closeModel} title="Add a new product">
<button className="bg-indigo-600 w-full" >submit</button>
<button className="bg-gray-700-800 hover:bg-slate-500 w-full">cancel</button>
</Model>
   </main>

  )
}

export default App
