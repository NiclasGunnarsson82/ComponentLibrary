import { CSSProperties, ButtonHTMLAttributes, MouseEvent, KeyboardEvent } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Button.module.scss"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string,
    disabled?: boolean,
    eventHandler: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
    label,
    disabled,
    eventHandler,
    children,
    ...props 
}: ButtonProps) => {
  
    const { colours } = useTheme()
  
    const styles = {
        "--button-colour-enabled": colours.blue300,
        "--button-colour-hover": colours.blue200,
        "--button-colour-focus": colours.blue300,
        "--button-colour-active": colours.blue100,
        "--button-colour-disabled": colours.blue400
    } as CSSProperties

    return (
        <button
            className={scss.button}
            id={props.id}
            onClick={eventHandler}
            disabled={disabled === undefined ? false : disabled}
            aria-label={label} 
            style={styles}>
                {label}
        </button>
    )
}
