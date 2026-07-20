import {  CSSProperties } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Checkbox.module.scss"
import { alignClass, CheckboxGroupProps } from "./helpers";

export const CheckboxList =
    ({  
        state,
        selected,
        setSelected,
        required,
        align = "vertical",
        checkboxes,
        ...props 
    }: CheckboxGroupProps) => {

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

    const prefix: string = checkboxes.group.toLowerCase()+"-"
    const alignment: string = alignClass(align, scss) 

    const updateSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = event.target.value
        const checked: boolean = event.target.checked
        if (checked && !selected.includes(value))  
            setSelected(current => [...current, value])     
        if (!checked)  
            setSelected(current => current.filter(item => item !== value))    
    }
    
    return(
        <div className={scss.checkboxList}>
            <p>
                {required && <strong>*</strong>}
                {checkboxes.group}
            </p>
            <div className={alignment}>
                {checkboxes.checkboxes.map((checkbox) => {
                let identifier: string = prefix+checkbox.option.toLowerCase()
                    return(
                        <label 
                            className={scss.checkbox}
                            style={styles} 
                            htmlFor={identifier}>
                            <input 
                                onChange={updateSelected}
                                type="checkbox"
                                name={identifier} 
                                value={checkbox.value}
                                {...props}/>
                            <span className={scss.checkmark}></span>
                            {checkbox.option}
                        </label> 
                    )
                })}
            </div>
            
       </div>              
    )
}
