import { ClipboardEvent, TextareaHTMLAttributes } from "react"

export type InputStateType = "default" | "error"

export type TextareaResizeType = 
    | "none" 
    | "both" 
    | "horizontal" 
    | "vertical" 
    | "initial" 
    | "inherit";


export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    name: string,
    label: string,
    state: InputStateType,
    errorMessage?: string,
    width?: string,
    required?: boolean,
    placeholder?: string,
    onCopy?: (event: ClipboardEvent<HTMLTextAreaElement>) => void,
    onPaste?: (event: ClipboardEvent<HTMLTextAreaElement>) => void,
    spellCheck?: boolean,
    language?: string,
    rows?: number,
    resize?: TextareaResizeType,
    initialValue?: string
}




