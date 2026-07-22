import { CSSProperties, useEffect, useRef, useState } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./MasonryGrid.module.scss"
import { calculateCardDimensions, CardDimensionType, GridProps } from "./helpers";
import { MasonryCard } from "./MasonryCard";


export const MasonryCardGrid = ({
    width = "100%",
    gridFlow = "dense",
    cards,
    ...props 
}: GridProps) => {
    
    const { card } = useTheme()

    const gridRef = useRef<HTMLDivElement>(null);
    const [dimensions, setdimensions] = useState<CardDimensionType | null>(null);
    useEffect(() => {
        if (gridRef.current) {
            const d = calculateCardDimensions(
                gridRef.current.getBoundingClientRect().width,
                card.mMinWidth,
                card.mGridGap
            )
            setdimensions(d)
        }          
    }, []);

    const styles = {
        "--grid-width": width,
        "--grid-auto-flow": gridFlow,
        "--grid-gap": card.mGridGap,
        "--grid-min-width": card.mMinWidth,
    } as CSSProperties

    return (
        <div
            ref={gridRef} 
            className={scss.masonryGrid}
            style={styles}
            {...props}>
                {dimensions &&
                cards.map((card) => {
                    return(
                        <MasonryCard
                            title={card.title}
                            summary={card.summary}
                            imgSrc={card.imgSrc}
                            imgAlt={card.imgAlt}
                            imgRatio={card.imgRatio}
                            dimensions={dimensions}/>
                    )
                })}
        </div>  
    )
}
