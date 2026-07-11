import { CSSProperties, forwardRef } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Form.module.scss"
import { FormProps } from "./helpers";

export const Form = forwardRef<HTMLFormElement, FormProps>(
    ({  
        errorMessage,
        width,
        ...props }, ref) => {

    const { font, input } = useTheme()

    const styles = {
        "--form-width": width ?? input.minWidth,
        "--form-padding": input.inputPadding,
        "--form-font-size": font.baseSize,
        "--font-family": font.fontfamily,
        "--font-weight": font.fontWeightRegular
    } as CSSProperties

    return(
        <form
            className={scss.form}
            ref={ref}
            style={styles} 
            action=""
            {...props}>

        </form>          
    )
})
