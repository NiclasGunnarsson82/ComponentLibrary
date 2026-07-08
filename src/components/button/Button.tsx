import { CSSProperties, ButtonHTMLAttributes, MouseEvent, KeyboardEvent, useState } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Button.module.scss"
import { ButtonConfigType } from "./helpers";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string,
    width?: string,
    isDisabled?: boolean,
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
    isDisabled,
    isLoading,
    isError,
    errorLabel,
    isSuccess,
    successLabel,
    eventHandler,
    children,
    ...props 
}: ButtonProps) => {
  
    const { colours, shadows, borders, font } = useTheme()

    const configDefault: ButtonConfigType = {
        scss: scss.button,
        loading: isLoading === undefined ? false : isLoading,
        success: isSuccess === undefined ? false : isSuccess,
        error: isError === undefined ? false : isError,
        disabled: isDisabled === undefined ? false: isDisabled
    }

    const [config, setConfig] = useState<ButtonConfigType>(configDefault)


    const styles = {
        "--button-width": "auto",
        "--button-font-size": font.baseSize,
        "--button-border-radius": borders.buttonBorderRadius,
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
            className={scss.button}
            id={props.id}
            onClick={eventHandler}
            disabled={false}
            aria-label={label} 
            style={styles}>
                {/* Display loader if isLoading state is defined and set to true, else display label */}
                {isLoading !== undefined && isLoading ?
                    <span className={scss.loader}></span>
                : label}
        </button>
    )
}
