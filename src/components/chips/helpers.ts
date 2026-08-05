import { Dispatch, HTMLAttributes, SetStateAction } from "react"

export type ChipType = {
    label: string,
    name: string,
    value: string,
    key: string,
}

export type ChipProps = {
    chip: ChipType,
    selectedChips: ChipType[],
    eventHandler: Dispatch<SetStateAction<ChipType[]>>;
}

export type ChipsProps = HTMLAttributes<HTMLDivElement> & {
    width?: string,
    visualContainer?: boolean,
    chips: ChipType[] 
}



