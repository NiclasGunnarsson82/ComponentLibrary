import { ClipboardEvent, InputHTMLAttributes } from "react"

export type InputStateType = "default" | "error"
export type InputTypeType = "text" | "password" | "email" |"number" |
"tel" | "url" | "search" | "hidden"

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    type: string,
    name: string,
    label: string,
    state: InputStateType,
    width?: string,
    required?: boolean,
    placeholder?: string,
    onCopy?: (event: ClipboardEvent<HTMLInputElement>) => void,
    onPaste?: (event: ClipboardEvent<HTMLInputElement>) => void,
    spellCheck?: boolean,
    language?: string
}


