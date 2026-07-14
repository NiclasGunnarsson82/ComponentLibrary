import { SelectHTMLAttributes } from "react"

export type SelectStateType = "default" | "error"
export type SelectOptionType = {
    option: string,
    value: string
}

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    name: string,
    label: string,
    state?: SelectStateType,
    errorMessage?: string,
    width?: string,
    required?: boolean,
    options: SelectOptionType[]
}


