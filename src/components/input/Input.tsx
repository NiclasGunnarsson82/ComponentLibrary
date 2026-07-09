import { CSSProperties, forwardRef } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Input.module.scss"
import { InputProps } from "./helpers";

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({  
        type,
        name,
        label,
        state,
        width,
        ...props }, ref?) => {

    const { colours, borders, font, dimensions } = useTheme()

    const widthValue: string = width ?? "180px"

    const styles = {
        "--input-width": widthValue,
        "--input-height": dimensions.inputHeight,
        "--input-font-size": font.baseSize,
        "--input-border-radius": borders.inputBorderRadius,
        "--input-colour-error": colours.error,
    } as CSSProperties

    return(
        <label htmlFor={name}>
            <input 
                className={scss.input}
                name={name}
                id={name}
                style={styles}
                ref={ref} 
                type={type}
                {...props}/>  
        </label>
              
    )
})
