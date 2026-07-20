import { ChangeEvent, CSSProperties } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Checkbox.module.scss"
import { CheckboxGroupProps, configureCheckbox, updateAll, updateSelected } from "./helpers";

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
        "--input-colour-hover": colours.blue200,
        "--input-colour-default": colours.inputDefault,
        "--input-colour-success": colours.success
    } as CSSProperties

    const checkboxClass: string =
        state === "default" ? scss.checkbox : scss.error

    const prefix: string = checkboxes.group.toLowerCase()+"-"
    const main: string = prefix+"main"
       
    const parentCheckbox = configureCheckbox(
        checkboxes.checkboxes.length,
        selected.length,
        scss
    )
      
    return(
        <div className={scss.checkboxList}>
            <p>
                {required && <strong>*</strong>}
                {checkboxes.group}
            </p>
            <label 
                className={scss.checkbox}
                style={styles} 
                htmlFor={main}>
                    <input 
                        onChange={(event) => updateAll(
                            event, 
                            setSelected, 
                            checkboxes.checkboxes)}
                        type="checkbox" 
                        name={main}
                        checked={parentCheckbox.mainIsChecked}/>
                            <span className={parentCheckbox.class}></span>
                            {parentCheckbox.mainIsChecked 
                                ? "Deselect all"
                                : "Select all"}
            </label>
            <div className={scss.checkboxes}>
                {checkboxes.checkboxes.map((checkbox) => {
                    let identifier: string = prefix+checkbox.option.toLowerCase()
                    let isSelected: boolean = selected.includes(checkbox.value) ?? false
                    return(
                        <label 
                            className={scss.checkbox}
                            style={styles} 
                            htmlFor={identifier}>
                            <input
                                onChange={(event) => 
                                    updateSelected(
                                        event, 
                                        setSelected, 
                                        selected)} 
                                type="checkbox" 
                                name={identifier} 
                                checked={isSelected}
                                value={checkbox.value}/>
                                <span className={scss.checkmark}></span>
                                    {checkbox.option}
                        </label> 
                        )
                    })}
            </div>  
       </div>              
    )
}
