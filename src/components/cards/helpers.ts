import { HTMLAttributes } from "react"

export type GridAutoFlowType =  "row" | "column" | "dense" | "row dense" | "column dense"

export type GridProps = HTMLAttributes<HTMLDivElement> & {
    width?: string,
    gridFlow?: GridAutoFlowType
    cards: MasonryCardItemType[]
}

export type CardImageRatioType =  "1:1" | "4:3" | "16:9" 

export type MasonryCardItemType = {
    title?: string,
    summary?: string,
    imgSrc: string,
    imgRatio: CardImageRatioType,
    imgAlt: string
}

export type CardDimensionType = {
    width: string,
    height: string  
}

export type MasonryCardProps = HTMLAttributes<HTMLDivElement> & {
    title?: string,
    summary?: string,
    imgSrc?: string,
    imgAlt: string,
    imgRatio: CardImageRatioType,
    dimensions: CardDimensionType 
}


export const calculateCardDimensions = (
    gridWidth: number, 
    minWidth: string, 
    gap: string 
): CardDimensionType => {
    const g: number = parseInt(gap, 10)
    const min: number = parseInt(minWidth, 10)
    const columns = Math.max(1,
        Math.floor((gridWidth + g) / (min + g))
    );
    const totalGap = g * (columns - 1);
    const cardWidth = (gridWidth - totalGap) / columns
    const width: string = cardWidth.toString()+"px"
    const object = {width: width, height: width}
    return object
}

