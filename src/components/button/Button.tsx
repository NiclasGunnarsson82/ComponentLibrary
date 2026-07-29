import { CSSProperties } from "react"
import { useComponentsProvider } from "@/utils/ComponentsContext"
import scss from "./Button.module.scss"
import { ButtonProps, configureButton } from "./helpers"


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
  
    const { tokens, colourScheme } = useComponentsProvider()

    //The function which calculates the button attribute values, based on component props.
    const config = configureButton({
        label, scss, width, state, style, 
        successLabel, errorLabel})

    const styles = {
        "--width": config.width,
        "--font-size": tokens.font.baseSize,
        "--font-family": tokens.font.fontfamily,
        "--font-weight": tokens.font.fontWeightBold,
        "--border-radius": tokens.borders.buttonBorderRadius,
        "--colour-enabled": colourScheme.colour300,
        "--colour-hover": colourScheme.colour200,
        "--colour-focus": colourScheme.colour300,
        "--colour-active": colourScheme.colour100,
        "--colour-disabled": colourScheme.colour400,
        "--colour-error": tokens.colours.error,
        "--colour-loader": style === "primary" ? tokens.colours.white : colourScheme.colour100,
        "--colour-success": tokens.colours.success,
        "--shadow-enabled": tokens.shadows.buttonEnabled,
        "--shadow-hover": tokens.shadows.buttonHover,
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
