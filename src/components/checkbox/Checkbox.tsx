import { CSSProperties, forwardRef } from "react";
import { useComponentsProvider } from "@/utils/ComponentsContext";
import scss from "./Checkbox.module.scss"
import { CheckboxProps } from "./helpers";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({  
        state,
        required,
        checkbox,
        ...props }, ref) => {

    const { tokens, colourScheme } = useComponentsProvider()

    const styles = {
        "--input-padding": tokens.form.inputPadding,
        "--input-shadow": tokens.form.inputShadow,
        "--checkbox-height": tokens.form.checkboxHeight,
        "--checkbox-width": tokens.form.checkboxWidth,
        "--input-font-size": tokens.fonts.baseSize,
        "--font-family": tokens.fonts.fontfamily,
        "--font-weight": tokens.fonts.fontWeightRegular,
        "--input-border-radius": tokens.form.inputBorderRadius,
        "--input-colour-error": tokens.colours.error,
        "--input-colour-hover": colourScheme.colour200,
        "--input-colour-default": tokens.colours.inputDefault,
        "--input-colour-success": tokens.colours.success
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
