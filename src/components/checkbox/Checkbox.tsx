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

    const { tokens } = useComponentsProvider()

    const styles = {
        "--input-padding": tokens.general.form.inputPadding,
        "--input-shadow": tokens.general.form.inputShadow,
        "--checkbox-height": tokens.general.form.checkboxHeight,
        "--checkbox-width": tokens.general.form.checkboxWidth,
        "--input-font-size": tokens.general.font.baseSize,
        "--font-family": tokens.general.font.fontfamily,
        "--font-weight": tokens.general.font.fontWeightRegular,
        "--input-border-radius": tokens.general.form.inputBorderRadius,
        "--input-colour-error": tokens.theme.error,
        "--input-colour-hover": tokens.colours.c200,
        "--input-colour-default": tokens.colours.inputDefault,
        "--input-colour-success": tokens.theme.success
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
