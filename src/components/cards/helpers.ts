import { HTMLAttributes } from "react"

export type GridAutoFlowType =  "row" | "column" | "dense" | "row dense" | "column dense"

export type GridProps = HTMLAttributes<HTMLDivElement> & {
    width?: string,
    gridFlow?: GridAutoFlowType
}

export type CardImageRatioType =  "1:1" | "4:3" | "16:9" 

export type MasonryCardProps = HTMLAttributes<HTMLDivElement> & {
    title?: string,
    summary?: string,
    imgSrc?: string,
    imgRatio: CardImageRatioType
}

