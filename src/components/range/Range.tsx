import { ChangeEvent, CSSProperties, forwardRef, useState } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Range.module.scss"
import { RangeProps } from "./helpers";

export const Range = forwardRef<HTMLInputElement, RangeProps>(
    ({  
        width = "100%",
        name,
        state = "default",
        errorMessage,
        label,
        required,
        min,
        max,
        step,
        ...props }, ref) => {

    const { colours, font, form, slider } = useTheme()

    const styles = {
        "--input-width": width,
        "--input-shadow": form.inputShadow,
        "--input-font-size": font.baseSize,
        "--font-family": font.fontfamily,
        "--font-weight": font.fontWeightRegular,
        "--slider-track-height": slider.trackHeight,
        "--slider-border-radius": slider.borderRadius,
        "--slider-thumb-size": slider.thumbSize,
        "--input-colour-default": colours.inputDefault,
        "--thumb-colour-enabled": colours.blue300,
        "--thumb-colour-focus": colours.blue200
    } as CSSProperties

    const initial: string = (parseInt(max)/2).toString()
    const [ currentValue, setCurrentValue ] = useState<string>(initial)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(event.target.value)
        return
    }

    return(
        <label 
            className={scss.label}
            style={styles} 
            htmlFor={name}>
                <span>
                    {label}
                    {required && <strong> (required)</strong>}
                </span>
                <input 
                    ref={ref}
                    className={scss.slider}
                    style={styles}
                    type="range" 
                    id={name} 
                    name={name} 
                    min="0" 
                    max="10"
                    step="1"
                    onChange={handleChange}
                    value={currentValue}
                    {...props}/>
                <p style={{textAlign: "center"}}>
                    {currentValue}
                </p>
                {errorMessage && state === "error" &&
                    <span className={scss.errorMessage}>
                        {errorMessage}
                    </span>
                } 
        </label>           
    )
})
