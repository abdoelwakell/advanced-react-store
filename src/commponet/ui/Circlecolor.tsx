import { FC, HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
 color: string;
}

const Circlecolor: FC<IProps> = ({color , ...rest }) => {
    return <span className={`block h-5 w-5 rounded-full  cursor-pointer flex-wrap`}  style={{backgroundColor : color}}
      {...rest}
    />
}

export default Circlecolor;
