import { CSSProperties } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./MasonryGrid.module.scss"
import { GridProps } from "./helpers";


export const MasonryCardGrid = ({
    width = "100%",
    gridFlow = "dense",
    children,
    ...props 
}: GridProps) => {
  
    const { cards } = useTheme()

    const styles = {
        "--grid-width": width,
        "--grid-auto-flow": gridFlow,
    } as CSSProperties

    return (
        <div 
            className={scss.masonryGrid}
            style={styles}
            {...props}>

            
        </div>
    )
}
