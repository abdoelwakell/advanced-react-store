import { FC } from "react";
import {InputHTMLAttributes} from 'react'
interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<IProps> = ({...rest}) => {
  return (
<>
<div >
    <input    {...rest} />
  </div>
</>
  );
};

export default Input;