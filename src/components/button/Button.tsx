import { CSSProperties, ButtonHTMLAttributes } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Button.module.scss"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string,
    disabled?: boolean
}

export const Button = ({
    children, 
    ...props }: ButtonProps) => {
  
    const { buttonColours } = useTheme()
  
    const styles = {
        "--button-enabled": buttonColours.enabled,
        "--button-hover": buttonColours.hover,
        "--button-pressed": buttonColours.pressed,
        "--button-focus": buttonColours.focus,
        "--button-disabled": buttonColours.disabled,  
    } as CSSProperties

    return (
        <button
            disabled={props.disabled}
            className={scss.customButton}
            id={props.id}
            aria-label={props["aria-label"]} 
            style={styles}>
            {props.label}
        </button>
    )
}
