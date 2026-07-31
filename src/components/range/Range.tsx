import { ChangeEvent, CSSProperties, forwardRef, useState } from "react";
import scss from "./Range.module.scss"
import { RangeProps } from "./helpers";
import { useComponentsProvider } from "@/utils/ComponentsContext";

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
        prefix ="",
        suffix ="",
        ...props }, ref) => {

    const { tokens, colourScheme } = useComponentsProvider()

    const styles = {
        "--input-width": width,
        "--input-shadow": tokens.general.form.inputShadow,
        "--input-font-size": tokens.general.font.baseSize,
        "--font-family": tokens.general.font.fontfamily,
        "--font-weight": tokens.general.font.fontWeightRegular,
        "--slider-track-height": tokens.slider.trackHeight,
        "--slider-border-radius": tokens.slider.borderRadius,
        "--slider-thumb-size": tokens.slider.thumbSize,
        "--input-colour-default": tokens.colours.inputDefault,
        "--thumb-colour-enabled": tokens.colours.c300,
        "--thumb-colour-focus": tokens.colours.c200
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
                    {prefix}{currentValue}{suffix}
                </p>
                {errorMessage && state === "error" &&
                    <span className={scss.errorMessage}>
                        {errorMessage}
                    </span>
                } 
        </label>           
    )
})
