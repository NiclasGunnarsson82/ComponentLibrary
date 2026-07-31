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
  
    const { tokens } = useComponentsProvider()

    //The function which calculates the button attribute values, based on component props.
    const config = configureButton({
        label, scss, width, state, style, 
        successLabel, errorLabel})

    const styles = {
        "--width": config.width,
        "--font-size": tokens.general.font.baseSize,
        "--font-family": tokens.general.font.fontfamily,
        "--font-weight": tokens.general.font.fontWeightBold,
        "--border-radius": tokens.general.borders.buttonBorderRadius,
        "--colour-enabled": tokens.colours.c300,
        "--colour-hover": tokens.colours.c200,
        "--colour-focus": tokens.colours.c300,
        "--colour-active": tokens.colours.c100,
        "--colour-disabled": tokens.colours.c400,
        "--colour-error": tokens.general.error,
        "--colour-loader": style === "primary" ? tokens.general.misc.white : tokens.colours.c100,
        "--colour-success": tokens.theme.success,
        "--shadow-enabled": tokens.general.shadows.buttonEnabled,
        "--shadow-hover": tokens.general.shadows.buttonHover
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
