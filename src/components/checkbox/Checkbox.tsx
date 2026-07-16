import { CSSProperties, forwardRef } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Checkbox.module.scss"
import { CheckboxProps } from "./helpers";

export const Checkbox = forwardRef<HTMLSelectElement, CheckboxProps>(
    ({  
        name,
        label,
        state,
        required,
        checkbox,
        ...props }, ref) => {

    const { colours, font, form } = useTheme()

    const styles = {
        "--input-padding": form.inputPadding,
        "--input-shadow": form.inputShadow,
        "--checkbox-height": form.checkboxHeight,
        "--checkbox-width": form.checkboxWidth,
        "--input-font-size": font.baseSize,
        "--font-family": font.fontfamily,
        "--font-weight": font.fontWeightRegular,
        "--input-border-radius": form.inputBorderRadius,
        "--input-colour-error": colours.error,
        "--input-colour-enabled": colours.blue300,
        "--input-colour-active": colours.blue100,
    } as CSSProperties

    const checkboxClass: string =
        state === "default" ? scss.checkbox : scss.error
    
    return(
        <label 
            className={scss.label}
            style={styles} 
            htmlFor={name}>
                <input 
                    className={scss.checkbox}
                    {...props} 
                    type="checkbox" 
                    name={name} 
                    id={name} />
            {label}                
        </label>       
    )
})
