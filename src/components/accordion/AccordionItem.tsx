import { CSSProperties, useState } from "react";
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

    return (
        <div  
            className={scss.item}
            style={styles}
            {...props}>             
                <div className={scss.header}>
                    <div className={scss.toggle}
                        onClick={ ()=>setShowContent(!showContent)}>
                            <h5>{title}</h5>  
                            <img 
                                src={showContent ? chevronUpIcon : chevronDownIcon} 
                                style={{width: "20px", height: "20px", 
                                    padding: "8px 8px 8px 10px"}}/>
                    </div>
                    {desc &&
                        <div className={scss.desc}>
                            <p>{desc}</p>
                        </div>    
                    }
                </div> 
                {showContent &&
                    <div className={scss.content}>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere a erat sed tempor. Proin ultrices mi risus, nec condimentum leo vehicula quis. Morbi eget rutrum odio. Mauris imperdiet ut mi eget convallis. Suspendisse ultrices efficitur erat quis pretium. Pellentesque porta sollicitudin odio, eu pharetra diam luctus eu. Nunc dictum libero sit amet tristique lacinia. </p> */}
                        {children}
                    </div> 
                }     
        </div>
    )
}
