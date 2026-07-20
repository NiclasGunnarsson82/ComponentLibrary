import { CSSProperties, forwardRef } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Radio.module.scss"
import { RadioProps } from "./helpers";


export const Radio = forwardRef<HTMLInputElement, RadioProps>(
    ({  
        width,
        name,
        state = "default",
        errorMessage,
        label,
        required,
        items,
        ...props }, ref) => {

    const { colours, font, form } = useTheme()

    const styles = {
        "--input-width": width ?? form.inputDefaultWidth,
        "--input-padding": form.inputPadding,
        "--input-shadow": form.inputShadow,
        "--input-height": form.inputHeight,
        "--input-font-size": font.baseSize,
        "--font-family": font.fontfamily,
        "--font-weight": font.fontWeightRegular,
        "--input-border-radius": form.inputBorderRadius,
        "--input-colour-error": colours.error,
        "--input-colour-enabled": colours.blue300,
    } as CSSProperties

    const selectClass: string =
        state === "default" ? scss.select : scss.error
    
    return(
        <div className={scss.radioList}>
        {items.map((item) => {
            return(
                <label 
                    className={scss.checkbox}
                    style={styles} 
                    htmlFor={item.id}>
                    <input
                        type="radio"
                        id={item.id}
                        name={item.name} 
                        value={item.value}
                        {...props}/>
                        <span className={scss.checkmark}></span>
                    {item.value}
                </label> 
            )
        })}
        </div>     
    )
})
