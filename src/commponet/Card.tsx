import { FC} from "react";
import { IProps } from "../interfaces/interface";
import Btn from "./ui/Btn";
import { txts } from "./util/Func";
import Circlecolor from "./ui/Circlecolor"; 
const Card: FC<IProps> = ({product ,setproductEdit , openEditmodel}) => {
  const {colors,desc,imageurl,price,title} = product ;

    const onEdit =()=> {
      setproductEdit(product) 
      openEditmodel()
    }
  {/**Render color  */}
  const colorsRender = colors.map(color => (
    <Circlecolor
      key={color}
      color={color}
  />
    
    ))

  return (
   <div className="max-w-sm mx-auto md:max-w-lg rounded-md p-2 flex flex-col m-2 border-gray-500 text-black border-2">
   <img src={imageurl} alt="cars" className=" w-full  h-50" />
   <h3>{title} </h3>
   <p>{txts(desc || "", 50)}</p>
   <div className="flex my-5 space-x-2 justify-center items-center  ">
    
   <div className="flex space-x-4 justify-center flex-wrap">{colorsRender}</div>

   </div>
   <div className="flex justify-between items-center ">
    <span className="text"> {price}$</span>
    <img src= {imageurl} alt="cars"
    className="h-10 w-10 rounded-full" />
   </div>
   <div className="flex items-center justify-center space-x-2 text-white ">
   <Btn className="bg-indigo-700 "    
   onClick={(onEdit)}
   width="w-full">  Edit</Btn>
   <Btn className="bg-red-700  " width="w-full">Delete</Btn>

   </div>
  
   </div>
  );
};

export default Card;