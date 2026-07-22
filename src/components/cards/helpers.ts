import { HTMLAttributes } from "react"

export type GridAutoFlowType =  
    "row" 
    | "column" 
    | "dense" 
    | "row dense" 
    | "column dense"

export type GridProps = HTMLAttributes<HTMLDivElement> & {
    width?: string,
    gridFlow?: GridAutoFlowType
    cards: MasonryCardItemType[]
}

export type CardImageRatioType =  
    "1:1" 
    | "4:3" 
    | "16:9" 
    | "3:4"

export type CardImagePositionType =   
    "top"
    | "bottom"
    | "left"
    | "right"
    | "center"
    | `${number}% ${number}%`;

export type CardDimensionsType =  {
    width: string,
    height: string
} 

export type MasonryCardItemType = {
    title?: string,
    summary?: string,
    imgSrc: string,
    imgRatio: CardImageRatioType,
    imgPosition?: string,
    imgAlt: string
}

export type MasonryCardProps = HTMLAttributes<HTMLDivElement> & {
    title?: string,
    summary?: string,
    imgSrc?: string,
    imgAlt: string,
    imgRatio: CardImageRatioType,
    imgPosition?: string,
    width: number 
}


export const calculateCardWidth = (
    gridWidth: number, 
    minWidth: string, 
    gap: string 
): number => {
    const g: number = parseInt(gap, 10)
    const min: number = parseInt(minWidth, 10)
    const columns = Math.max(1,
        Math.floor((gridWidth + g) / (min + g))
    );
    const totalGap = g * (columns - 1);
    return (gridWidth - totalGap) / columns
}


export const calculateImageSize = (
    cardWidth: number, 
    imgRatio: CardImageRatioType
): CardDimensionsType => {
    let d: CardDimensionsType = {
        width: cardWidth.toString()+"px", 
        height: ""}
    switch (imgRatio) {
        case "1:1":
            d.height = d.width
            break;
        case "16:9":
            d.height = (cardWidth * 9 / 16).toString()+"px"
            break;
        case "4:3":
            d.height = (cardWidth * 3 / 4).toString()+"px"
            break;
        case "3:4":
            d.height = (cardWidth * 4 / 3).toString()+"px"
            break;
        default:
            break;
    }
    return d
}

