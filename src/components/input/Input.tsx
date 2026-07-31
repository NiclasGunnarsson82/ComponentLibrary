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
        "--input-width": width ?? tokens.general.form.inputDefaultWidth,
        "--input-padding": tokens.general.form.inputPadding,
        "--input-shadow": tokens.general.form.inputShadow,
        "--input-height": tokens.general.form.inputHeight,
        "--input-font-size": tokens.general.font.baseSize,
        "--font-family": tokens.general.font.fontfamily,
        "--font-weight": tokens.general.font.fontWeightRegular,
        "--border-radius": tokens.general.form.inputBorderRadius,
        "--colour-error": tokens.theme.error,
        "--input-text-colour": tokens.theme.foreground,
        "--colour-focus": tokens.colours.c300,
        "--border-colour": tokens.theme.inputBorder,
        "--input-background": tokens.theme.inputBackground,
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
