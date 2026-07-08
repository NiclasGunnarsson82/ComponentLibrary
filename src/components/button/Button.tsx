import { CSSProperties, ButtonHTMLAttributes, MouseEvent, KeyboardEvent, useState, useEffect } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Button.module.scss"
import { ButtonConfigType, ConfigType, configureButton } from "./helpers";

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

    const configDefault: ConfigType = {
        disabled: isDisabled === undefined ? false: isDisabled,
        label: label,
        width: width === undefined ? "auto" : width,
        scss: scss.button,
    }
    const [config, setConfig] = useState<ConfigType>(configDefault)
    useEffect(() => {
        let configuration = configureButton({
            label, scss, width, isLoading, 
            isSuccess, successLabel,
            isError, errorLabel, isDisabled})
        setConfig(configuration)
    }, [isError, isLoading, isSuccess, isDisabled]);

    const styles = {
        "--button-width": config.width,
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
            className={config.scss}
            id={props.id}
            onClick={eventHandler}
            disabled={config.disabled}
            aria-label={label} 
            style={styles}>
                {/* Display loader if isLoading state is defined and set to true, else display label */}
                {isLoading !== undefined && isLoading ?
                    <span className={scss.loader}></span>
                : config.label}
        </button>
    )
}
