import { CSSProperties } from "react";
import scss from "./RadioGroup.module.scss"
import { RadioGroupProps } from "./helpers";
import { useComponentsProvider } from "@/utils/ComponentsContext";


export const RadioGroup = 
    ({  
        width,
        name,
        state = "default",
        errorMessage,
        label,
        required,
        items,
        selected,
        setSelected,
        ...props }: RadioGroupProps) => {

    const { tokens, colourScheme } = useComponentsProvider()

    const styles = {
        "--input-width": width ?? tokens.form.inputDefaultWidth,
        "--input-padding": tokens.form.inputPadding,
        "--input-shadow": tokens.form.inputShadow,
        "--radio-width": tokens.form.radioWidth,
        "--radio-height": tokens.form.radioHeight,
        "--font-family": tokens.font.fontfamily,
        "--font-weight": tokens.font.fontWeightRegular,
        "--input-colour-hover": colourScheme.colour200,
        "--input-colour-error": tokens.colours.error,
        "--input-colour-active": colourScheme.colour100,
        "--input-colour-default": tokens.colours.inputDefault,
    } as CSSProperties

    const selectClass: string =
        state === "default" ? scss.radio : scss.error
    
    return(
        <div className={scss.radioList}>
            {items.map((item) => {
                return(
                    <label 
                        className={scss.label}
                        style={styles} 
                        htmlFor={item.id}>
                            <input
                                className={scss.radio}
                                style={styles}
                                onChange={(e) => setSelected(e.target.value)} 
                                type="radio"
                                id={item.id}
                                name={item.name} 
                                value={item.value}
                                checked={item.value === selected ? true : false}
                                {...props}/>
                                {item.value}
                    </label> 
                )
            })}
        </div>     
    )
}
