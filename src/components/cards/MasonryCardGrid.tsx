import { CSSProperties } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./MasonryGrid.module.scss"
import { GridProps } from "./helpers";


export const MasonryCardGrid = ({
    children,
    ...props 
}: GridProps) => {
  
    const { cards } = useTheme()

    const styles = {
        "--grid-width": cards.defaultWidth,
    } as CSSProperties

    return (
        <div 
            className={scss.masonryGrid}
            style={styles}
            {...props}>

            
        </div>
    )
}
