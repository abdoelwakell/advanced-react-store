import { FC } from "react";

interface IProps {
      Msg  : string ;
}

const Error: FC<IProps> = ({Msg}) => {
return Msg ? <span className="block text-red-600 font-semibold">{Msg}</span> : null
};

export default Error;