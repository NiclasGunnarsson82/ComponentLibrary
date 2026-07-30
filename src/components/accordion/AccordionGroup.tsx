import { CSSProperties } from "react";
import scss from "./Accordion.module.scss"
import { GroupProps } from "./helpers";
import { useComponentsProvider } from "@/utils/ComponentsContext";

export const AccordionGroup = ({
    width = "100%",
    children,
    ...props 
}: GroupProps) => {
  
    const { tokens } = useComponentsProvider()

    const styles = {
        "--font-size": tokens.font.baseSize,
        "--font-family": tokens.font.fontfamily,
        "--font-weight": tokens.font.fontWeightBold,
        "--width": width
    } as CSSProperties

    return (
        <div 
            className={scss.group}
            style={styles}
            {...props}>
                {children}
        </div>
    )
}
