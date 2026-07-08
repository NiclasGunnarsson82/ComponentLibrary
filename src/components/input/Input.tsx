import { CSSProperties, forwardRef } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Input.module.scss"
import { InputProps } from "./helpers";

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({  
        type,
        label,
        state,
        width,
        ...props }, ref) => {

    const { colours, borders, font } = useTheme()

    const styles = {
        "--input-width": width,
        "--input-font-size": font.baseSize,
        "--input-border-radius": borders.buttonBorderRadius,
        "--input-colour-error": colours.error,
    } as CSSProperties

    return (
        <input 
            ref={ref} 
            type={type}
            {...props}/>
    )
})
