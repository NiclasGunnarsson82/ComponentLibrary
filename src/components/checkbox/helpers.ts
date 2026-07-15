import { InputHTMLAttributes } from "react"

export type CheckboxVariationType = "standalone" | "list" | "nested"
export type CheckboxStateType = "default" | "error" 

export type CheckboxStandaloneType = {
    label: string,
    value: string
}
export type CheckboxListType = {
    checkboxes: CheckboxStandaloneType[]
}
export type CheckboxNestedType = {
    group: string,
    options: CheckboxStandaloneType[]
}

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string,
    label: string,
    variation: CheckboxVariationType,
    state: CheckboxStateType,
    required?: boolean,
    options: CheckboxStandaloneType | CheckboxListType | CheckboxNestedType
}

