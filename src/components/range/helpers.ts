import { InputHTMLAttributes } from "react"


export type RangeProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string,
    label: string,
    state?: "default" | "error",
    errorMessage?: string,
    width?: string,
    required?: boolean,
    min: string,
    max: string,
    step: string,
    prefix?: string,
    suffix?: string
}

