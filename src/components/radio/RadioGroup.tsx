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

    const { tokens, colourScheme,theme } = useComponentsProvider()

    const styles = {
        "--input-width": width ?? tokens.general.form.inputDefaultWidth,
        "--input-padding": tokens.general.form.inputPadding,
        "--input-shadow": tokens.general.form.inputShadow,
        "--radio-width": tokens.general.form.radioWidth,
        "--radio-height": tokens.general.form.radioHeight,
        "--font-family": tokens.general.font.fontfamily,
        "--font-weight": tokens.general.font.fontWeightRegular,
        "--input-colour-hover": tokens.colours.c200,
        "--input-colour-error": theme.error,
        "--input-colour-active": tokens.colours.c100,
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
