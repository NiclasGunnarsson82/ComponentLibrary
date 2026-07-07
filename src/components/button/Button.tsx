import { CSSProperties, ButtonHTMLAttributes, MouseEvent, KeyboardEvent } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Button.module.scss"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string,
    width?: string,
    disabled?: boolean,
    isLoading?: boolean,
    isError?: boolean,
    errorLabel?: string,
    isSuccess?: boolean,
    successLabel?: string,
    eventHandler: (event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void
}

export const Button = ({
    label,
    width,
    disabled,
    isLoading,
    isError,
    errorLabel,
    isSuccess,
    successLabel,
    eventHandler,
    children,
    ...props 
}: ButtonProps) => {
  
    const { colours, shadows } = useTheme()
    

    let loadingState: boolean = isLoading === undefined ? false : isLoading
    let successState: boolean = isSuccess === undefined ? false : isSuccess
    let errorState: boolean = isError === undefined ? false : isError
    let className: string;
    if (loadingState) {
        className = scss.isLoading
    } else if (successState) {
        className = scss.isSuccess
    } else if (errorState) {
        className = scss.isError
    } else {
        className = scss.button
    }

    let isDisabled: boolean = disabled === undefined ? false : disabled;
    if (isLoading) {
        isDisabled = true
    } else if (isError) {
        isDisabled = true
    } else if (isSuccess) {
        isDisabled = true
    } 

    let buttonLabel: string = label
    if (isError) {
        errorLabel === undefined 
        ? buttonLabel = "Error" 
        : buttonLabel = errorLabel} 
    else if (isSuccess) {
        successLabel === undefined 
        ? buttonLabel = "Success" 
        : buttonLabel = successLabel} 


    //Determines button width based on optional width prop
    const widthValue: string = width === undefined ? "auto" : width
  
    const styles = {
        "--button-width": widthValue,
        "--button-colour-enabled": colours.blue300,
        "--button-colour-hover": colours.blue200,
        "--button-colour-focus": colours.blue300,
        "--button-colour-active": colours.blue100,
        "--button-colour-disabled": colours.blue400,
        "--button-colour-error": colours.error,
        "--button-colour-success": colours.success,
        "--button-shadow-enabled": shadows.buttonEnabled,
        "--button-shadow-hover": shadows.buttonHover,
    } as CSSProperties

    return (
        <button
            className={className}
            id={props.id}
            onClick={eventHandler}
            disabled={isDisabled === undefined ? false : isDisabled}
            aria-label={label} 
            style={styles}>
                {/* Display loader if isLoading state is defined and set to true, else display label */}
                {isLoading !== undefined && isLoading ?
                    <span className={scss.loader}></span>
                : buttonLabel}
        </button>
    )
}
