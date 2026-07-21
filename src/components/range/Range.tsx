import { CSSProperties, forwardRef } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Select.module.scss"
import { RangeProps } from "./helpers";

export const Range = forwardRef<HTMLInputElement, RangeProps>(
    ({  
        width,
        name,
        state = "default",
        errorMessage,
        label,
        required,
        min,
        max,
        step,
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
        "--input-colour-enabled": colours.blue300,
    } as CSSProperties

    return(
        <label 
            className={scss.label}
            style={styles} 
            htmlFor={name}>
                <span>
                    {label}
                    {required && <strong> (required)</strong>}
                </span>
                 <input 
                    ref={ref}
                    type="range" 
                    id={name} 
                    name={name} 
                    min="0" 
                    max="10"
                    step="1"
                    {...props}/>
                {errorMessage && state === "error" &&
                    <span className={scss.errorMessage}>
                        {errorMessage}
                    </span>
                } 
        </label>           
    )
})
