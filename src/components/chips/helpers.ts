import { HTMLAttributes, MouseEvent } from "react"

export type ChipType = {
    label: string,
    value: string,
    eventHandler: (event: MouseEvent<HTMLDivElement>) => void
}

export type ChipsProps = HTMLAttributes<HTMLDivElement> & {
    width?: string,
    visualContainer: boolean,
    chips: ChipType[] 
}



