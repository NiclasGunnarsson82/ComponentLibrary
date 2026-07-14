import { CSSProperties, forwardRef } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Select.module.scss"
import { SelectProps } from "./helpers";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({  
        width,
        name,
        state = "default",
        errorMessage,
        label,
        required,
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

    const selectClass =
        state === "default" ? scss.select : scss.error;

    return(
        <label 
            className={scss.label}
            style={styles} 
            htmlFor={name}>
                <span>
                    {label}
                    {required && <strong> (required)</strong>}
                </span>
                <select
                    ref={ref}
                    className={selectClass}
                    style={styles}
                    {...props}>   
                </select>
                {errorMessage && state === "error" &&
                    <span className={scss.errorMessage}>
                        {errorMessage}
                    </span>
                } 
        </label>           
    )
})
