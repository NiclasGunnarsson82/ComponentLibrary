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
        "--input-width": width ?? tokens.general.form.inputDefaultWidth,
        "--input-padding": tokens.general.form.inputPadding,
        "--input-shadow": tokens.general.form.inputShadow,
        "--input-height": tokens.general.form.inputHeight,
        "--input-font-size": tokens.general.font.baseSize,
        "--font-family": tokens.general.font.fontfamily,
        "--font-weight": tokens.general.font.fontWeightRegular,
        "--border-radius": tokens.general.form.inputBorderRadius,
        "--colour-error": tokens.theme.error,
        "--colour-focus": tokens.colours.c300,
        "--border-colour": tokens.theme.inputBorder,
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
