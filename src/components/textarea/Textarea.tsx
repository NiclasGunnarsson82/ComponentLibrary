import { ChangeEvent, CSSProperties, forwardRef, useState } from "react";
import scss from "./Textarea.module.scss"
import { TextareaProps } from "./helpers";
import { useComponentsProvider } from "@/utils/ComponentsContext";

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

    const { tokens } = useComponentsProvider()

    const styles = {
        "--input-width": width ?? tokens.general.form.inputDefaultWidth,
        "--input-padding": tokens.general.form.inputPadding,
        "--input-shadow": tokens.general.form.inputShadow,
        "--input-font-size": tokens.general.font.baseSize,
        "--font-family": tokens.general.font.fontfamily,
        "--font-weight": tokens.general.font.fontWeightRegular,
        "--input-border-radius": tokens.general.form.inputBorderRadius,
        "--input-colour-error": tokens.theme.error,
        "--input-colour-focus": tokens.colours.c300,
        "--input-colour-default": tokens.colours.inputDefault,
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
