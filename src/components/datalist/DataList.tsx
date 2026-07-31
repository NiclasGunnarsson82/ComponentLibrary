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
        "--colour-focus": tokens.colours.c300,
        "--border-colour": tokens.theme.inputBorder,
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
