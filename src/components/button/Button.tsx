import { CSSProperties, useState, useEffect } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Button.module.scss"
import { ButtonProps, ConfigType, configureButton } from "./helpers";


export const Button = ({
    label,
    state,
    width,
    errorLabel,
    successLabel,
    eventHandler,
    children,
    ...props 
}: ButtonProps) => {
  
    const { colours, shadows, borders, font } = useTheme()

    //The default values for button attributes configuration
    const configDefault: ConfigType = {
        state: "default",
        disabled: false,
        label: label,
        width: width ?? "auto",
        scss: scss.button,
    }
    //The state for button attributes configuration
    const [config, setConfig] = useState<ConfigType>(configDefault)

    //The function that determines the attribute values based on component property values.
    useEffect(() => {
        let configuration = configureButton({
            label, scss, width, state, 
            successLabel, errorLabel})
        setConfig(configuration)
    }, [state]);

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
                {state === "loading" ?
                    <span className={scss.loader}></span>
                : config.label}
        </button>
    )
}
