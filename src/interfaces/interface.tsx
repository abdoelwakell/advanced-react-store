
export interface IProps {
    product : Iproduct ;
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
    desc ?: string ;
    imageurl : string;
    price : string  ;
    colors : string [] ;
    category :  {
        name : string ;
        imageurl : string ;
    }
   
  }