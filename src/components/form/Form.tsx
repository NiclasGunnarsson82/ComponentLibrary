import { CSSProperties, forwardRef } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Form.module.scss"
import { FormProps } from "./helpers";

export const Form = forwardRef<HTMLFormElement, FormProps>(
    ({  
        errorMessage,
        width,
        children,
        ...props }, ref) => {

    const { font, form } = useTheme()

    const styles = {
        "--form-width": width ?? form.minWidth,
        "--form-input-gap": form.formDefaultGap,
        "--form-padding": form.formPadding,
        "--form-font-size": font.baseSize,
        "--font-family": font.fontfamily,
    } as CSSProperties

    return(
        <form
            className={scss.form}
            ref={ref}
            style={styles} 
            action=""
            {...props}>
               {children} 
        </form>          
    )
})
