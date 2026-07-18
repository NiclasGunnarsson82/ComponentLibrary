import {  CSSProperties } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Checkbox.module.scss"
import { CheckboxGroupProps } from "./helpers";

export const CheckboxList =
    ({  
        state,
        selected,
        setSelected,
        required,
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
        "--input-colour-default": colours.inputDefault,
        "--input-colour-active": colours.blue100
    } as CSSProperties

    const checkboxClass: string =
        state === "default" ? scss.checkbox : scss.error
    const prefix: string = checkboxes.group.toLowerCase()+"-"

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
                {checkboxes.group}
                <strong>{required && " (required)"}</strong> 
            </p>
            {checkboxes.checkboxes.map((checkbox) => {
                let identifier: string = prefix+checkbox.option.toLowerCase()
                return(
                    <label 
                        className={scss.checkboxListLabel}
                        style={styles} 
                        htmlFor={identifier}>
                    <input 
                        onChange={updateSelected}
                        type="checkbox"
                        style={styles}
                        className={checkboxClass}
                        name={identifier} 
                        value={checkbox.value}
                        {...props}/>
                        {checkbox.option}
                    </label> 
                )
            })}
       </div>              
    )
}
