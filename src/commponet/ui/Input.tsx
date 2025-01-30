import { FC } from "react";
interface IProps {
  // Define your props here (if none, leave empty or delete this interface)
}

const Input: FC<IProps> = ({}) => {
  return (
<>
<div className="flex flex-col">
    <label htmlFor="">title</label>
    <input type="text" className="border-2 border-gray-500"  />
  </div>
</>
  );
};

export default Input;