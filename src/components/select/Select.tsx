import { CSSProperties, forwardRef } from "react";
import scss from "./Select.module.scss"
import { compileOptions, SelectProps } from "./helpers";
import { useComponentsProvider } from "@/utils/ComponentsContext";

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

    const { tokens } = useComponentsProvider()

    const styles = {
        "--input-width": width ?? tokens.form.inputDefaultWidth,
        "--input-padding": tokens.form.inputPadding,
        "--input-shadow": tokens.form.inputShadow,
        "--input-height": tokens.form.inputHeight,
        "--input-font-size": tokens.font.baseSize,
        "--font-family": tokens.font.fontfamily,
        "--font-weight": tokens.font.fontWeightRegular,
        "--input-border-radius": tokens.form.inputBorderRadius,
        "--input-colour-error": tokens.colours.error,
        "--input-colour-default": tokens.colours.inputDefault,
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
