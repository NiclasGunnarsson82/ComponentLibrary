import { CSSProperties, forwardRef } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./RadioGroup.module.scss"
import { RadioGroupProps } from "./helpers";


export const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(
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
        ...props }, ref) => {

    const { colours, font, form } = useTheme()

    const styles = {
        "--input-width": width ?? form.inputDefaultWidth,
        "--input-padding": form.inputPadding,
        "--input-shadow": form.inputShadow,
        "--radio-width": form.radioWidth,
        "--radio-height": form.radioHeight,
        "--font-family": font.fontfamily,
        "--font-weight": font.fontWeightRegular,
        "--input-colour-hover": colours.blue200,
        "--input-colour-error": colours.error,
        "--input-colour-active": colours.blue100,
        "--input-colour-default": colours.inputDefault,
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
})
