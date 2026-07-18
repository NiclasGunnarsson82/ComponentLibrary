import { ChangeEvent, CSSProperties } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Checkbox.module.scss"
import { CheckboxGroupProps } from "./helpers";

export const NestedCheckbox = 
    ({  
        state,
        selected,
        setSelected,
        required,
        checkboxes}: CheckboxGroupProps) => {

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
    const main: string = prefix+"main"
    const mainIsChecked: boolean = checkboxes.checkboxes.length == selected.length ? true : false

    const updateAll = (event: ChangeEvent<HTMLInputElement>) => {
        const checked: boolean = event.target.checked
        if (checked) {
            const all = checkboxes.checkboxes.map(
            checkbox => checkbox.value) 
            setSelected(all)  
        } else {
            setSelected([]) 
        }     
    }
    const updateSelected = (event: ChangeEvent<HTMLInputElement>) => {
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
            <label 
                className={scss.checkboxListLabel}
                style={styles} 
                htmlFor={main}>
                    <input 
                        onChange={updateAll}
                        className={checkboxClass}
                        style={styles}
                        type="checkbox" 
                        name={main}
                        checked={mainIsChecked}/>
                {mainIsChecked 
                    ? "Deselect all"
                    : "Select all"
                }
            </label>
            <div className={scss.checkboxes}>
                {checkboxes.checkboxes.map((checkbox) => {
                    let identifier: string = prefix+checkbox.option.toLowerCase()
                    let isSelected: boolean = selected.includes(checkbox.value) ?? false
                    return(
                        <label 
                            className={scss.checkboxListLabel}
                            style={styles} 
                            htmlFor={identifier}>
                            <input
                                onChange={updateSelected} 
                                className={checkboxClass}
                                style={styles}
                                type="checkbox" 
                                name={identifier} 
                                checked={isSelected}
                                value={checkbox.value}/>
                                    {checkbox.option}
                        </label> 
                        )
                    })}
            </div>  
       </div>              
    )
}
