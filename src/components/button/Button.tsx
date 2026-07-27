import { CSSProperties } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Button.module.scss"
import { ButtonProps, configureButton } from "./helpers";

export const Button = ({
    label,
    style,
    state,
    width,
    type = "button",
    errorLabel,
    successLabel,
    eventHandler,
    ...props 
}: ButtonProps) => {
  
    const { colours, shadows, borders, font } = useTheme()

    //The function which calculates the button attribute values, based on component props.
    const config = configureButton({
        label, scss, width, state, style, 
        successLabel, errorLabel})

    const styles = {
        "--width": config.width,
        "--font-size": font.baseSize,
        "--font-family": font.fontfamily,
        "--font-weight": font.fontWeightBold,
        "--border-radius": borders.buttonBorderRadius,
        "--colour-enabled": colours.blue300,
        "--colour-hover": colours.blue200,
        "--colour-focus": colours.blue300,
        "--colour-active": colours.blue100,
        "--colour-disabled": colours.blue400,
        "--colour-error": colours.error,
        "--colour-loader": style === "primary" ? colours.white : colours.blue100,
        "--colour-success": colours.success,
        "--shadow-enabled": shadows.buttonEnabled,
        "--shadow-hover": shadows.buttonHover,
    } as CSSProperties

    return (
        <button
            type={type}
            className={config.scss}
            onClick={eventHandler}
            disabled={config.disabled}
            aria-disabled={state === "disabled" ? true : false}
            style={styles}
            {...props}>
                {/* Display spinner if isLoading, else display label */}
                {state === "loading" ?
                    <span style={styles} className={scss.loader}></span>
                : config.label}
        </button>
    )
}
