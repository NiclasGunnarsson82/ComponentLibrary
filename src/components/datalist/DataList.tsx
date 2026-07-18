import { CSSProperties, forwardRef } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./DataList.module.scss"
import { DataListProps } from "./helpers";

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

    const { colours, font, form } = useTheme()

    const styles = {
        "--input-width": width ?? form.inputDefaultWidth,
        "--input-padding": form.inputPadding,
        "--input-shadow": form.inputShadow,
        "--input-height": form.inputHeight,
        "--input-font-size": font.baseSize,
        "--font-family": font.fontfamily,
        "--font-weight": font.fontWeightRegular,
        "--input-border-radius": form.inputBorderRadius,
        "--input-colour-error": colours.error,
        "--input-colour-focus": colours.blue300,
        "--input-colour-default": colours.inputDefault,
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
