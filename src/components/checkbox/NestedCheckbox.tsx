import { CSSProperties, forwardRef } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Checkbox.module.scss"
import { NestedCheckboxProps } from "./helpers";

export const NestedCheckbox = forwardRef<HTMLSelectElement, NestedCheckboxProps>(
    ({  
        state,
        required,
        checkboxes}, ref) => {

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
    const main: string = prefix+"main"
      
    return(
        <div className={scss.checkboxList}>
            <label 
                className={scss.checkboxListLabel}
                style={styles} 
                htmlFor={main}>
                    <input 
                        className={scss.checkbox}
                        style={styles}
                        type="checkbox" 
                        name={main} 
                        id={main}
                        value="all"/>
                {checkboxes.group}
            </label>
            <div className={scss.checkboxes}>
                {checkboxes.checkboxes.map((checkbox) => {
                    let identifier: string = prefix+checkbox.option.toLowerCase()
                    return(
                        <label 
                            className={scss.checkboxListLabel}
                            style={styles} 
                            htmlFor={identifier}>
                            <input 
                                className={scss.checkbox}
                                style={styles}
                                type="checkbox" 
                                name={identifier} 
                                id={identifier}
                                value={checkbox.value}/>
                                    {checkbox.option}
                        </label> 
                        )
                    })}
            </div>  
       </div>              
    )
})
