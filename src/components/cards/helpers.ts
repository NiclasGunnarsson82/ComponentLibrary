import { HTMLAttributes } from "react"

export type GridAutoFlow =  "row" | "column" | "dense" | "row dense" | "column dense"

export type GridProps = HTMLAttributes<HTMLDivElement> & {
    width?: string,
    gridFlow?: GridAutoFlow
}

