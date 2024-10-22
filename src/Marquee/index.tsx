import { FC, HTMLAttributes, useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {
    startPlayback?: boolean;
    speed?: number;
    direction?: "left" | "right";
    delay?: CSSProperties["animationDelay"];
    gradientColor?: string;
    gradientWidth?: CSSProperties["width"];
    pauseOnHover?: boolean;
}


const Marquee:FC<Props> = (props: Props) => {
    const {
        startPlay = true,
        speed = 200,
        delay,
        children, 
        className, 
        direction = "left",
        gradientColor,
        gradientWidth = 200,
        pauseOnHover,
        ...restProps
    } = props;

    const [contentWidth, setContentWidth] = useState(0)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(startPlay && contentRef.current){
            setContentWidth(contentRef.current.getBoundingClientRect().width)
        }
    },[startPlay])

    const duration = contentWidth / speed;
    
    const contentStyles: CSSProperties = {
        animationDelay: delay,
        animationDirection: direction === "right" ? "reverse" : undefined,
        animationDuration: `${duration}s`
    }

    return (
        <div className={classNames(styles.marquee,className,{[styles.pauseOnHover]:pauseOnHover})} {...restProps}>
            <div ref={contentRef} className={styles.content} style={contentStyles}>
                {children}
            </div>
            <div className={styles.content} style={contentStyles}>
                {children}
            </div>

            {
                gradientColor && (
                    <>
                    <div className={classNames(styles.overlay, styles.leftOverlay)} style={{
                        background: `linear-gradient(90deg,${gradientColor} 0%,rgba(255,255,255,0) 100%)`,
                        width: gradientWidth,
                    }}></div>
                    <div className={classNames(styles.overlay, styles.rightOverlay)} style={{
                        background: `linear-gradient(270deg,${gradientColor} 0%,rgba(255,255,255,0) 100%)`,
                        width: gradientWidth,
                    }}></div>
                    </>
                )
            }

           
        </div>
    )
    
}

export default Marquee; 