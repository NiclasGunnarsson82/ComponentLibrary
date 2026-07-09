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
        required,
        placeholder,
        ...props }, ref?) => {

    const { colours, borders, font, dimensions, padding } = useTheme()

    const widthValue: string = width ?? "180px"

    const styles = {
        "--input-width": widthValue,
        "--input-padding": padding.inputPadding,
        "--input-height": dimensions.inputHeight,
        "--input-font-size": font.baseSize,
        "--input-border-radius": borders.inputBorderRadius,
        "--input-colour-error": colours.error,
    } as CSSProperties

    return(
        <label 
            className={scss.label} 
            htmlFor={name}>
                <span>
                     {label}
                    {required && <strong> (required)</strong>}
                </span>
                <input 
                    className={scss.input}
                    name={name}
                    id={name}
                    style={styles}
                    ref={ref} 
                    type={type}
                    required={required ?? false}
                    placeholder={placeholder ?? ""}
                    {...props}/>  
        </label>           
    )
})
