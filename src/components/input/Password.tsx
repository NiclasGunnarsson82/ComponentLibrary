import { CSSProperties, forwardRef, useState } from "react";
import scss from "./Input.module.scss"
import { PasswordProps } from "./helpers";
import showPasswordIcon from "./icons/show-password.svg";
import hidePasswordIcon from "./icons/hide-password.svg";
import { useComponentsProvider } from "@/utils/ComponentsContext";

export const Password = forwardRef<HTMLInputElement, PasswordProps>(
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
        "--input-border-radius": tokens.general.form.inputBorderRadius,
        "--input-colour-error": theme.error,
        "--input-colour-focus": tokens.colours.c300,
        "--input-colour-default": tokens.colours.inputDefault,
    } as CSSProperties

    const inputClass =
        state === "default" ? scss.input : scss.error;

    const [showPassword, setShowPassword] = useState<boolean>(false)

    return(
        <label 
            className={scss.label}
            style={styles} 
            htmlFor={name}>
                <span>
                    {required && <strong>*</strong>}
                    {label}
                </span>
                <div className={scss.inputWrapper}>   
                    <input 
                        className={inputClass}
                        name={name}
                        id={name}
                        style={styles}
                        ref={ref} 
                        type={showPassword ? "text" : "password"}
                        required={required ?? false}
                        onCopy={onCopy}
                        onPaste={onPaste}
                        placeholder={placeholder}
                        {...props}/> 
                        <button 
                            type="button"
                            className={scss.iconButton}>
                                <img 
                                    onClick={() => setShowPassword(!showPassword)}
                                    src={showPassword ? showPasswordIcon : hidePasswordIcon} 
                                    alt={showPassword ? "Show password" : "Hide password"} 
                                    style={{width: "25px", height: "25px", 
                                        padding: "8px 8px 8px 10px"}}/>
                        </button>
                </div>
                 {errorMessage && state === "error" &&
                    <span className={scss.errorMessage}>
                        {errorMessage}
                    </span>
                } 
        </label>           
    )
})
