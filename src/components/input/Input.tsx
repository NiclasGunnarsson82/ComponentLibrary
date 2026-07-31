import { CSSProperties, forwardRef } from "react";
import scss from "./Input.module.scss"
import { InputProps } from "./helpers";
import { useComponentsProvider } from "@/utils/ComponentsContext";

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
        "--input-colour-error": theme.error,
        "--input-text-colour": theme.foreground,
        "--input-colour-focus": tokens.colours.c300,
        "--border-colour": theme.inputBorder,
        "--input-background": theme.inputBackground,
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
