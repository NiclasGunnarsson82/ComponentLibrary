import { InputHTMLAttributes } from "react"

export type InputStateType = "default" | "error"
export type InputTypeType = "text" | "password" | "email" |"number" |
"tel" | "url" | "search" | "hidden"

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    type: string
    label: string,
    state: InputStateType,
    width?: string,
}


