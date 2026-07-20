import { Dispatch, InputHTMLAttributes, SetStateAction } from "react"

export type RadioStateType = "default" | "error" 

export type RadioItemType = {
    name: string,
    id: string,
    value: string
}

export type RadioGroupProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string,
    state: RadioStateType,
    errorMessage?: string,
    width?: string,
    required?: boolean,
    items: RadioItemType[],
    selected: string,
    setSelected: Dispatch<SetStateAction<string>>
}
