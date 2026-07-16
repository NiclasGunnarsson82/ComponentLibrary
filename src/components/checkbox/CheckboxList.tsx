import { CSSProperties, forwardRef } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Checkbox.module.scss"
import { CheckboxListProps } from "./helpers";

export const CheckboxList = forwardRef<HTMLSelectElement, CheckboxListProps>(
    ({  
        name,
        label,
        state,
        required,
        checkboxes,
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
        "--input-colour-active": colours.blue100
    } as CSSProperties

    const checkboxClass: string =
        state === "default" ? scss.select : scss.error
    
    return(
        <div className={scss.checkboxList}>
            <p><strong>{checkboxes.group}</strong></p>
            {checkboxes.checkboxes.map((checkbox) =>{
                return(
                    <label 
                        className={scss.checkboxListLabel}
                        style={styles} 
                        htmlFor={name}>
                    <input 
                        className={scss.checkbox}
                        {...props} 
                        style={styles}
                        type="checkbox" 
                        name={checkbox.option} 
                        value={checkbox.value}
                        id={name+checkbox.option} />
                        {checkbox.option}
                    </label> 
                )
            })}
       </div>              
    )
})
