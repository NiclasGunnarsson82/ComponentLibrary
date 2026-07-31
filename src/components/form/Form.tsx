import { CSSProperties, forwardRef } from "react";
import { useComponentsProvider } from "@/utils/ComponentsContext";
import scss from "./Form.module.scss"
import { FormProps } from "./helpers";

export const Form = forwardRef<HTMLFormElement, FormProps>(
    ({  
        errorMessage,
        width,
        gap,
        children,
        requirments,
        handleSubmit,
        ...props }, ref) => {

    const { tokens } = useComponentsProvider()

    const styles = {
        "--form--width": width ?? tokens.general.form.minWidth,
        "--form-input-gap": gap ?? tokens.general.form.formDefaultGap,
        "--form-padding": tokens.general.form.formPadding,
        "--form-font-size": tokens.font.baseSize,
        "--font-family": tokens.font.fontfamily,
    } as CSSProperties

    return(
        <form
            onSubmit={handleSubmit}
            className={scss.form}
            ref={ref}
            style={styles} 
            action=""
            {...props}>
               {children} 
               {requirments && <span>{requirments}</span>}
        </form>          
    )
})
