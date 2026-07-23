import { CSSProperties, forwardRef, useState } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Input.module.scss"
import { DateProps } from "./helpers";

export const Time = forwardRef<HTMLInputElement, DateProps>(
    ({  
        name,
        label,
        state,
        errorMessage,
        width,
        required = false,
        disabled = false,
        ...props }, ref) => {

    const { colours, font, form } = useTheme()

    const styles = {
        "--input-width": width ?? form.inputDefaultWidth,
        "--input-padding": form.inputPadding,
        "--input-shadow": form.inputShadow,
        "--input-height": form.inputHeight,
        "--input-font-size": font.baseSize,
        "--font-family": font.fontfamily,
        "--font-weight": font.fontWeightRegular,
        "--input-border-radius": form.inputBorderRadius,
        "--input-colour-error": colours.error,
        "--input-colour-focus": colours.blue300,
        "--input-colour-default": colours.inputDefault,
    } as CSSProperties

    const inputClass =
        state === "default" ? scss.input : scss.error;

    return(
        <label 
            className={scss.label}
            style={styles} 
            htmlFor={name}>
                <span>
                    {required && <strong>*</strong>}
                    {label}
                </span>   
                <input
                    ref={ref} 
                    type="time" 
                    className={inputClass}
                    name={name}
                    id={name}
                    style={styles}
                    required={required}
                    disabled={disabled}
                    {...props}/> 
                 {errorMessage && state === "error" &&
                    <span className={scss.errorMessage}>
                        {errorMessage}
                    </span>
                } 
        </label>           
    )
})
