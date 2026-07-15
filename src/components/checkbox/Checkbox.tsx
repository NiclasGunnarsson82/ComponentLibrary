import { CSSProperties, forwardRef } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Select.module.scss"
import { CheckboxProps } from "./helpers";

export const Checkbox = forwardRef<HTMLSelectElement, CheckboxProps>(
    ({  
        name,
        label,
        variation,
        state,
        required,
        options = [],
        ...props }, ref) => {

    const { colours, font, form } = useTheme()

    const styles = {
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

    const selectClass: string =
        state === "default" ? scss.select : scss.error
    
    return(
        <>
        {variation === "standalone" &&
            <label 
                className={scss.label}
                style={styles} 
                htmlFor={name}>
                    <span>
                        {label}
                        {required && <strong> (required)</strong>}
                    </span>
                    <input
                        {...props} 
                        type="checkbox" 
                        name={name} 
                        id={name} />
            </label>  
        }
        {variation === "list" &&
            <label 
                className={scss.label}
                style={styles} 
                htmlFor={name}>
                    <span>
                        {label}
                        {required && <strong> (required)</strong>}
                    </span>
            </label>  
        }
        {variation === "nested" &&
            <label 
                className={scss.label}
                style={styles} 
                htmlFor={name}>
                    <span>
                        {label}
                        {required && <strong> (required)</strong>}
                    </span>
            </label>  
        }
    </>                 
    )
})
