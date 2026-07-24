import { ChangeEvent, CSSProperties, forwardRef, useEffect, useState } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Textarea.module.scss"
import { TextareaProps } from "./helpers";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({  
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
        rows = 4,
        resize = "none",
        initialValue = "" 
        }, ref) => {

    const { colours, font, form } = useTheme()

    const styles = {
        "--input-width": width ?? form.inputDefaultWidth,
        "--input-padding": form.inputPadding,
        "--input-shadow": form.inputShadow,
        "--input-font-size": font.baseSize,
        "--font-family": font.fontfamily,
        "--font-weight": font.fontWeightRegular,
        "--input-border-radius": form.inputBorderRadius,
        "--input-colour-error": colours.error,
        "--input-colour-focus": colours.blue300,
        "--input-colour-default": colours.inputDefault,
        "--textarea-resize": resize,
    } as CSSProperties

    const inputClass =
        state === "default" ? scss.textarea : scss.error;

    const [value, setValue] = useState<string>(initialValue)
    const updateTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value)
        return
    }
   
    return(
        <label 
            className={scss.label}
            style={styles} 
            htmlFor={name}>
                <span>
                    {required && <strong>*</strong>}
                    {label}
                </span>
                <textarea 
                    ref={ref} 
                    className={inputClass}
                    name={name}
                    id={name}
                    style={styles}
                    required={required}
                    onCopy={onCopy}
                    onPaste={onPaste}
                    placeholder={placeholder}
                    spellCheck={spellCheck}
                    lang={language}
                    rows={rows}
                    value={value}
                    onChange={updateTextarea}/> 
                    {errorMessage && state === "error" &&
                        <span className={scss.errorMessage}>
                            {errorMessage}
                        </span>
                    } 
        </label>           
    )
})
