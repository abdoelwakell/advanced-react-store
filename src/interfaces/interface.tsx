import { produnctname } from "../types";

export interface IProps {
    product : Iproduct ;
    setproductEdit :(product:Iproduct)=> void
    openEditmodel:()=>void
}
export interface IProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;        // Required prop for React children
    className?: string;  
    width: 'w-full' | 'w-fit';
    
     // Optional class name for styling
  }

 export interface Iproduct {
    id ?: string | undefined ;
    title: string ;
    desc : string ;
    imageurl : string;
    price : string  ;
    colors : string [] ;
    category :  {
        name : string ;
        imgUrl : string ;
    }
   
  }
  export interface Ipnput {
    id :  string
    name : produnctname
    label : string
    type :  string
  }
  export interface Icatagory {
    id : string , 
    name :string , 
    imgUrl : string 
  }