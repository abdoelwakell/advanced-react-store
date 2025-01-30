import { FC} from "react";
import { IProps } from "../interfaces/interface";
import Btn from "./ui/Btn";
import { txts } from "./util/Func";
const Card: FC<IProps> = ({product}) => {
  const {id,category,colors,desc,imageurl,price,title} = product ;
  return (
   <div className="max-w-sm mx-auto md:max-w-lg rounded-md p-2 flex flex-col m-2 border-gray-500 text-black border-2">
   <img src={imageurl} alt="cars" className=" w-full  h-50" />
   <h3>{title} </h3>
   <p>{txts(desc || "", 50)}</p>
   <div className="flex my-5 space-x-2 justify-center items-center  ">
   <span className="h-5 w-5 bg-indigo-600 rounded-full cursor-pointer "/>
   <span className="h-5 w-5 bg-yellow-600 rounded-full cursor-pointer  "/>
   <span className="h-5 w-5 bg-red-600 rounded-full   cursor-pointer   "/>
   </div>
   <div className="flex justify-between items-center m-1">
    <span> {price}</span>
    <img src= {imageurl} alt="cars"
    className="h-10 w-10 rounded-full" />
   </div>
   <div className="flex items-center justify-center space-x-2 text-white ">
   <Btn className="bg-indigo-700 "    
   onClick = {()=> {console.log("true")}}
   width="w-full">  Edit</Btn>
   <Btn className="bg-red-700  " width="w-full">Delete</Btn>

   </div>
  
   </div>
  );
};

export default Card;