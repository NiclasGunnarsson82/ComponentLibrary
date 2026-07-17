import { CSSProperties, forwardRef } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Checkbox.module.scss"
import { CheckboxGroupProps } from "./helpers";

export const CheckboxList = forwardRef<HTMLSelectElement, CheckboxGroupProps>(
    ({  
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
    const prefix: string = checkboxes.group.toLowerCase()+"-"
    
    return(
        <div className={scss.checkboxList}>
            <p><strong>{checkboxes.group}</strong></p>
            {checkboxes.checkboxes.map((checkbox) => {
                let identifier: string = prefix+checkbox.option.toLowerCase()
                return(
                    <label 
                        className={scss.checkboxListLabel}
                        style={styles} 
                        htmlFor={identifier}>
                    <input 
                        type="checkbox"
                        style={styles}
                        className={scss.checkbox}
                        name={identifier} 
                        id={identifier}
                        value={checkbox.value}
                        {...props}/>
                        {checkbox.option}
                    </label> 
                )
            })}
       </div>              
    )
})
