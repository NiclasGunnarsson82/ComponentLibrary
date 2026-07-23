import { InputHTMLAttributes } from "react"


export type ToggleSwitchProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string,
    stateDescriptor?: boolean,
    state?: "default" | "error",
    errorMessage?: string,
    width?: string,
    required?: boolean,
}

