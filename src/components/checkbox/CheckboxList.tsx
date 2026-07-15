import { CSSProperties, forwardRef } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Select.module.scss"
import { CheckboxProps } from "./helpers";

export const CheckboxList = forwardRef<HTMLSelectElement, CheckboxProps>(
    ({  
        name,
        label,
        state,
        required,
        options = [],
        ...props }, ref) => {

    const { colours, font, form } = useTheme()

    const styles = {
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

    const checkboxClass: string =
        state === "default" ? scss.select : scss.error
    
    return(
        <label 
            className={scss.label}
            style={styles} 
            htmlFor={name}>
                <span>
                    {label}
                    {required && <strong> (required)</strong>}
                </span>
        </label>              
    )
})
