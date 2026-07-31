import {  CSSProperties } from "react";
import { useComponentsProvider } from "@/utils/ComponentsContext";
import scss from "./Checkbox.module.scss"
import { alignClass, CheckboxGroupProps, updateSelected } from "./helpers";


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

    const { colourScheme, tokens, theme } = useComponentsProvider()

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

    const prefix: string = checkboxes.group.toLowerCase()+"-"
    const alignment: string = alignClass(align, scss) 
    
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
                                 onChange={(event) => 
                                    updateSelected(
                                        event, 
                                        setSelected, 
                                        selected)} 
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
