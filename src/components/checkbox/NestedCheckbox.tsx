import { CSSProperties } from "react";
import scss from "./Checkbox.module.scss"
import { alignClass, CheckboxGroupProps, configureCheckbox, updateAll, updateSelected } from "./helpers";
import { useComponentsProvider } from "@/utils/ComponentsContext";

export const NestedCheckbox = 
    ({  
        state,
        selected,
        setSelected,
        required,
        align = "vertical",
        checkboxes}: CheckboxGroupProps) => {

    const { tokens, colourScheme } = useComponentsProvider()

    const styles = {
        "--input-padding": tokens.form.inputPadding,
        "--input-shadow": tokens.form.inputShadow,
        "--checkbox-height": tokens.form.checkboxHeight,
        "--checkbox-width": tokens.form.checkboxWidth,
        "--input-font-size": tokens.font.baseSize,
        "--font-family": tokens.font.fontfamily,
        "--font-weight": tokens.font.fontWeightRegular,
        "--input-border-radius": tokens.form.inputBorderRadius,
        "--input-colour-error": tokens.colours.error,
        "--input-colour-hover": colourScheme.colour200,
        "--input-colour-default": tokens.colours.inputDefault,
        "--input-colour-success": tokens.colours.success
    } as CSSProperties

    const checkboxClass: string =
        state === "default" ? scss.checkbox : scss.error

    const alignment: string = alignClass(align, scss) 

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
            <div className={alignment} style={{marginLeft: "25px"}}>
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
