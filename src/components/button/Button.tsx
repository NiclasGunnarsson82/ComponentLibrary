import { CSSProperties, ButtonHTMLAttributes, MouseEvent, KeyboardEvent, useState, useEffect } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Button.module.scss"
import { ConfigType, configureButton } from "./helpers";

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

    //The default value for button attributes configuration
    const configDefault: ConfigType = {
        disabled: isDisabled === undefined ? false: isDisabled,
        label: label,
        width: width === undefined ? "auto" : width,
        scss: scss.button,
    }
    //The state for button attributes configuration
    const [config, setConfig] = useState<ConfigType>(configDefault)

    //The function that determines the attribute values based on component property values.
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
                {/* Display spinner if isLoading, else display label */}
                {isLoading !== undefined && isLoading ?
                    <span className={scss.loader}></span>
                : config.label}
        </button>
    )
}
