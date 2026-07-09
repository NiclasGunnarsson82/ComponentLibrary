import { CSSProperties, forwardRef } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Input.module.scss"
import { InputProps } from "./helpers";

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({  
        type,
        name,
        label,
        state,
        width,
        required,
        placeholder,
        onCopy,
        onPaste,
        spellCheck,
        language,
        autoComplete,
        inputMode,
        ...props }, ref?) => {

    const { colours, font, input } = useTheme()

    const widthValue: string = width ?? input.minWidth

    const styles = {
        "--input-width": widthValue,
        "--input-padding": input.inputPadding,
        "--input-height": input.inputHeight,
        "--input-font-size": font.baseSize,
        "--font-family": font.fontfamily,
        "--font-weight": font.fontWeightRegular,
        "--input-border-radius": input.inputBorderRadius,
        "--input-colour-error": colours.error,
        "--input-colour-enabled": colours.blue300,
        "--input-colour-focused": colours.blue100,
    } as CSSProperties

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
                    className={state === "default" ? scss.input : scss.error}
                    name={name}
                    id={name}
                    style={styles}
                    ref={ref} 
                    type={type}
                    required={required ?? false}
                    onCopy={onCopy}
                    onPaste={onPaste}
                    placeholder={placeholder ?? ""}
                    spellCheck={spellCheck ?? false}
                    lang={language ?? "en"}
                    autoComplete={autoComplete ?? "off"}
                    inputMode={inputMode ?? "text"}
                    {...props}/>  
        </label>           
    )
})
