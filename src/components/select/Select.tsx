import { CSSProperties, forwardRef } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Select.module.scss"
import { compileOptions, SelectProps } from "./helpers";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({  
        width,
        name,
        state = "default",
        errorMessage,
        label,
        required,
        options = [],
        selected,
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

    const selectClass:string =
        state === "default" ? scss.select : scss.error
    const selectedValue: string = selected?.value ?? ""

    const compiledOptions = compileOptions(options)
    
    return(
        <label 
            className={scss.label}
            style={styles} 
            htmlFor={name}>
                <span>
                    {required && <strong>*</strong>}
                    {label}
                </span>
                <select
                    value={selectedValue}
                    ref={ref}
                    className={selectClass}
                    style={styles}
                    {...props}>
                        {compiledOptions.length === 0 ? (
                            //If no options
                            <option disabled>No options</option>
                        ) : (
                            //If options
                            compiledOptions.map((option) => (
                                //If not optGroup option
                                !("group" in option) 
                                ?
                                    <option 
                                        key={option.value} 
                                        value={option.value}>
                                        {option.option}
                                    </option>
                                :
                                //If optGroup options
                                <optgroup 
                                    key={option.group} 
                                    label={option.group}>
                                        {option.options.map((item) =>
                                            <option 
                                                key={item.value} 
                                                value={item.value}>
                                                {item.option}
                                            </option>  
                                        )}
                                </optgroup>  
                            ))
                        )}
                </select>
                {errorMessage && state === "error" &&
                    <span className={scss.errorMessage}>
                        {errorMessage}
                    </span>
                } 
        </label>           
    )
})
