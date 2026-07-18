import { CSSProperties, forwardRef } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Checkbox.module.scss"
import { CheckboxProps } from "./helpers";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({  
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
        "--input-colour-hover": colours.blue200,
        "--input-colour-default": colours.inputDefault,
        "--input-colour-success": colours.success
    } as CSSProperties
    
    return(
        <label 
            className={scss.checkbox}
            style={styles} 
            htmlFor={checkbox.option.toLowerCase()}>
                <input 
                    ref={ref}
                    {...props} 
                    type="checkbox" 
                    name={checkbox.option.toLowerCase()}
                    value={checkbox.value}/>
                    <span className={scss.checkmark}></span>
                {required && <strong>*</strong>}
                {checkbox.option}               
        </label>  
    )
})
