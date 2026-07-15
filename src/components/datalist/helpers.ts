import { SelectHTMLAttributes } from "react"

export type DataListStateType = "default" | "error"

export type DataListProps = SelectHTMLAttributes<HTMLSelectElement> & {
    inputName: string,
    listName: string,
    label: string,
    state?: DataListStateType,
    errorMessage?: string,
    width?: string,
    required?: boolean,
    options: string[],
    selected?: string
}

