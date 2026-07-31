import { CSSProperties, forwardRef } from "react";
import scss from "./Input.module.scss"
import { DateProps } from "./helpers";
import { useComponentsProvider } from "@/utils/ComponentsContext";

export const Date = forwardRef<HTMLInputElement, DateProps>(
    ({  
        name,
        label,
        state,
        errorMessage,
        width,
        required = false,
        disabled = false,
        ...props }, ref) => {

    const { tokens } = useComponentsProvider()

    const styles = {
        "--input-width": width ?? tokens.form.inputDefaultWidth,
        "--input-padding": tokens.form.inputPadding,
        "--input-shadow": tokens.form.inputShadow,
        "--input-height": tokens.form.inputHeight,
        "--input-font-size": tokens.font.baseSize,
        "--font-family": tokens.font.fontfamily,
        "--font-weight": tokens.font.fontWeightRegular,
        "--input-border-radius": tokens.form.inputBorderRadius,
        "--input-colour-error": theme.error,
        "--input-colour-focus": tokens.colours.c300,
        "--input-colour-default": tokens.colours.inputDefault,
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
                    type="date" 
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
