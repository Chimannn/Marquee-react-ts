import { FC, HTMLAttributes } from "react";
interface Props extends HTMLAttributes<HTMLDivElement> {}


const Marquee:FC<Props> = (props: Props) => {
    const {children} = props;

    return (
        <div>
            {children}
        </div>
    )
    
}

export default Marquee; 