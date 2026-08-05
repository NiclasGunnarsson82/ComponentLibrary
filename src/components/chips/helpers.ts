import { Dispatch, HTMLAttributes, SetStateAction } from "react"

export type ChipTypeType = "selectable" | "removable"

export type ChipType = {
    type: ChipTypeType,
    label: string,
    name: string,
    value: string,
    key: string,
}

export type ChipProps = {
    chip: ChipType,
    selectedChips: ChipType[],
    type: ChipTypeType,
    eventHandler: Dispatch<SetStateAction<ChipType[]>>;
}

export type ChipsProps = HTMLAttributes<HTMLDivElement> & {
    width?: string,
    visualContainer?: boolean,
    type: ChipTypeType,
    chips: ChipType[] 
}



