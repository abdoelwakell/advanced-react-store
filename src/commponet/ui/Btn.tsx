import { FC, ReactNode } from "react";
import { IProp } from "../../interfaces/interface";

const Btn: FC<IProp> = ({ children, className, width , ...rest  }) => {
  return (
   
    <>
    
       <button
      className={`${className} items-center rounded-lg p-3 ${width} `}
      {...rest}
    >
      {children}
    </button>
    </>
 
  );
};

export default Btn;