import { CSSProperties, forwardRef } from "react";
import scss from "./DataList.module.scss"
import { DataListProps } from "./helpers";
import { useComponentsProvider } from "@/utils/ComponentsContext";

export const DataList = forwardRef<HTMLDataListElement, DataListProps>(
    ({  
        width,
        inputName,
        listName,
        state = "default",
        errorMessage,
        label,
        required,
        options = [],
        ...props }, ref) => {

    const { colourScheme, tokens } = useComponentsProvider()

    const styles = {
        "--input-width": width ?? tokens.form.inputDefaultWidth,
        "--input-padding": tokens.form.inputPadding,
        "--input-shadow": tokens.form.inputShadow,
        "--input-height": tokens.form.inputHeight,
        "--input-font-size": tokens.font.baseSize,
        "--font-family": tokens.font.fontfamily,
        "--font-weight": tokens.font.fontWeightRegular,
        "--input-border-radius": tokens.form.inputBorderRadius,
        "--input-colour-error": tokens.colours.error,
        "--input-colour-focus": colourScheme.colour300,
        "--input-colour-default": tokens.colours.inputDefault,
    } as CSSProperties

    const DataListClass: string =
        state === "default" ? scss.dataList : scss.error
    
    return(
        <>
            <label 
                className={scss.label}
                style={styles} 
                htmlFor={inputName}>
                    <span>
                        {required && <strong>*</strong>}
                        {label}
                    </span>
                <input 
                    className={DataListClass}
                    style={styles}
                    type="text"
                    list={listName}  
                    id={inputName} 
                    name={inputName} />
                <datalist
                    id={listName} 
                    ref={ref}>
                        {options.map((option) => (
                            <option key={option} value={option} />
                        ))}
                </datalist>
                {errorMessage && state === "error" &&
                    <span className={scss.errorMessage}>
                        {errorMessage}
                    </span>
                } 
            </label>
        </>           
    )
})
