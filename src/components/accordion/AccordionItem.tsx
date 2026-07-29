import { CSSProperties, useRef, useState } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Accordion.module.scss"
import { ItemProps } from "./helpers";
import  chevronDownIcon from "./icons/chevron-down.svg"
import  chevronUpIcon from "./icons/chevron-up.svg";

export const AccordionItem = ({
    title,
    desc,
    children,
    ...props 
}: ItemProps) => {
  
    const { font } = useTheme()

    const styles = {
        "--font-size": font.baseSize,
        "--font-family": font.fontfamily,
        "--font-weight": font.fontWeightBold
    } as CSSProperties

    const [ showContent, setShowContent ] = useState<boolean>(false) 
    const contentRef = useRef<HTMLDivElement>(null);   

    return (
        <div  
            className={scss.item}
            style={styles}
            {...props}>             
                <div className={scss.header}>
                    <div className={scss.toggle}>
                        <h4>{title}</h4>  
                        <button 
                            onClick={() => setShowContent(prev => !prev)}
                            className={scss.trigger}
                            type="button">
                                <img 
                                    src={showContent 
                                    ? chevronUpIcon 
                                    : chevronDownIcon}/>
                        </button>     
                    </div>
                    {desc &&
                        <p className={scss.desc}>{desc}</p> 
                    }
                </div> 

                <div 
                    ref={contentRef}
                    style={{ maxHeight: showContent
                        ? `${contentRef.current?.scrollHeight}px`
                        : "0px"
                    }}  
                    className={`${scss.content} ${showContent ? scss.open : ""}`}>
                        <div className={scss.contentInner}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere a erat sed tempor. Proin ultrices mi risus, nec condimentum leo vehicula quis. Morbi eget rutrum odio. Mauris imperdiet ut mi eget convallis. Suspendisse ultrices efficitur erat quis pretium. Pellentesque porta sollicitudin odio, eu pharetra diam luctus eu. Nunc dictum libero sit amet tristique lacinia. </p>
                            {children}
                        </div>
                </div>

        </div>
    )
}
