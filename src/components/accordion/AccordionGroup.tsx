import { CSSProperties } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Accordion.module.scss"
import { GroupProps } from "./helpers";

export const AccordionGroup = ({
    width = "100%",
    children,
    ...props 
}: GroupProps) => {
  
    const { font } = useTheme()

    const styles = {
        "--font-size": font.baseSize,
        "--font-family": font.fontfamily,
        "--font-weight": font.fontWeightBold,
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
