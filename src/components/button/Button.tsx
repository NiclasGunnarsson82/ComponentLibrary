import { CSSProperties } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Button.module.scss"
import { ButtonProps, configureButton } from "./helpers";

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

    //The function which calculates the button attribute values, based on component props.
    const config = configureButton({
        label, scss, width, state, 
        successLabel, errorLabel})

    const styles = {
        "--button-width": config.width,
        "--button-font-size": font.baseSize,
        "--font-family": font.fontfamily,
        "--font-weight": font.fontWeightBold,
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
            {...props}
            className={config.scss}
            id={props.id}
            onClick={eventHandler}
            disabled={config.disabled}
            aria-disabled={state === "disabled" ? true : false}
            style={styles}>
                {/* Display spinner if isLoading, else display label */}
                {state === "loading" ?
                    <span className={scss.loader}></span>
                : config.label}
        </button>
    )
}
