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
        errorMessage,
        width,
        required = false,
        placeholder = "",
        onCopy,
        onPaste,
        spellCheck = false,
        language = "en",
        autoComplete = "off",
        inputMode = "text",
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
        "--input-colour-focus": colours.blue300,
        "--input-colour-default": colours.inputDefault,
    } as CSSProperties

    const inputClass =
        state === "default" ? scss.input : scss.error;

    return(
        <label 
            className={scss.label}
            style={styles} 
            htmlFor={name}>
                <span>
                    {required && <strong>*</strong>}
                    {label}
                </span>
                <input 
                    className={inputClass}
                    name={name}
                    id={name}
                    style={styles}
                    ref={ref} 
                    type={type}
                    required={required ?? false}
                    onCopy={onCopy}
                    onPaste={onPaste}
                    placeholder={placeholder}
                    spellCheck={spellCheck ?? false}
                    lang={language ?? "en"}
                    autoComplete={autoComplete}
                    inputMode={inputMode}
                    {...props}/> 
                    {errorMessage && state === "error" &&
                        <span className={scss.errorMessage}>
                            {errorMessage}
                        </span>
                    } 
        </label>           
    )
})
