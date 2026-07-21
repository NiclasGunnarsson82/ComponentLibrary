import { CSSProperties, useEffect, useRef, useState } from "react";
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

    const gridRef = useRef<HTMLDivElement>(null);
    const [gridWidth, setGridWidth] = useState<number>(0);
    useEffect(() => {
        if (gridRef.current) 
            setGridWidth(gridRef.current.getBoundingClientRect().width)
    }, []);

    const styles = {
        "--grid-width": width,
        "--grid-auto-flow": gridFlow,
    } as CSSProperties

    return (
        <div
            ref={gridRef} 
            className={scss.masonryGrid}
            style={styles}
            {...props}>
                {children}
        </div>
    )
}
